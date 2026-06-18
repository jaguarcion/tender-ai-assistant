import { PrismaClient } from '@tender/database';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create a mock user
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
    },
  });

  // Create a search profile
  const profile = await prisma.searchProfile.create({
    data: {
      userId: user.id,
      name: 'IT Оборудование',
      keywords: ['сервер', 'компьютер', 'ноутбук'],
      regions: ['Москва', 'МО'],
      minPrice: 100000,
    },
  });

  // Create mock tenders
  const tendersData = [
    {
      source: 'EIS',
      externalId: '0373100004315000006',
      title: 'Поставка серверного оборудования и СХД для нужд ведомства',
      customerName: 'ФНС России по г. Москве',
      price: 2500000,
      publishDate: new Date(),
      deadlineDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // +4 days
      status: 'active',
      url: 'https://zakupki.gov.ru/epz/order/notice/ea44/view/common-info.html?regNumber=0373100004315000006',
      aiAnalysis: {
        summary: 'Заказчику требуется облачная CRM-система на 50 рабочих мест с интеграцией телефонии.',
        risks: ['Штраф за просрочку этапов - 1% за каждый день', 'Очень жесткие сроки внедрения (30 дней)'],
        fitScore: 89,
      }
    },
    {
      source: 'B2B',
      externalId: '7689001',
      title: 'Оказание услуг по технической поддержке ПО',
      customerName: 'ГУП Водоканал',
      price: 850000,
      publishDate: new Date(),
      deadlineDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000), // +12 days
      status: 'active',
      url: 'https://www.b2b-center.ru/market/view.html?id=7689001',
      aiAnalysis: {
        summary: 'Необходима техническая поддержка внедренной ранее ERP-системы.',
        risks: ['Обязательное присутствие специалиста на объекте 2 раза в неделю'],
        fitScore: 75,
      }
    },
    {
      source: 'EIS',
      externalId: '0373100004315000008',
      title: 'Разработка сайта и мобильного приложения',
      customerName: 'Министерство Культуры',
      price: 4500000,
      publishDate: new Date(),
      deadlineDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
      status: 'active',
      url: 'https://zakupki.gov.ru/',
      aiAnalysis: {
        summary: 'Требуется кроссплатформенное мобильное приложение и корпоративный портал.',
        risks: ['Размытое ТЗ на дизайн', 'Требование к сертификации ФСТЭК'],
        fitScore: 60,
      }
    }
  ];

  for (const t of tendersData) {
    const { aiAnalysis, ...tenderBase } = t;
    
    const tender = await prisma.tender.upsert({
      where: { source_externalId: { source: tenderBase.source, externalId: tenderBase.externalId } },
      update: {},
      create: tenderBase,
    });

    await prisma.tenderAiAnalysis.create({
      data: {
        tenderId: tender.id,
        searchProfileId: profile.id,
        summary: aiAnalysis.summary,
        risks: aiAnalysis.risks,
        fitScore: aiAnalysis.fitScore,
      }
    });

    // Create match
    await prisma.tenderMatch.create({
      data: {
        tenderId: tender.id,
        searchProfileId: profile.id,
        userId: user.id,
        score: aiAnalysis.fitScore,
        status: aiAnalysis.fitScore > 80 ? 'new' : 'viewed'
      }
    });
  }

  console.log('Database seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
