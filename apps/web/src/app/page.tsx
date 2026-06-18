import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { BarChart3, ArrowRight } from 'lucide-react';
import { FeatureShowcase } from '@/components/FeatureShowcase';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: 'Tender AI | Система поиска тендеров и управления закупками',
  description: 'Увеличьте прибыль от госзакупок с помощью Tender AI. Детальная аналитика, управление закупками и умный поиск — всё в одной системе.',
  keywords: ['тендеры', 'закупки', 'госзакупки', 'поиск тендеров', 'crm для тендеров', 'аналитика тендеров', 'система управления закупками'],
  openGraph: {
    title: 'Tender AI | Система поиска тендеров',
    description: 'Увеличьте прибыль от госзакупок с помощью Tender AI.',
    type: 'website',
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/20 opacity-20 blur-[120px]"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
            Увеличьте прибыль от госзакупок с помощью Tender AI
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-8 leading-tight">
            Единая система поиска тендеров, <br className="hidden md:block"/> 
            <span className="text-primary">аналитики и управления</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Детальная аналитика контрагентов, удобное управление закупками и командой — всё в одной инновационной системе на базе искусственного интеллекта.
          </p>
          
          <div className="flex justify-center items-center">
            <Button asChild size="lg" className="text-lg px-10 h-16 rounded-lg shadow-lg hover:scale-105 transition-transform w-full sm:w-auto font-semibold">
              <Link href="/register">
                Попробовать бесплатно
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* LOGOS / SOCIAL PROOF */}
      <section className="py-12 border-y border-border bg-muted/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Ищем закупки на более чем 150 площадках</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <h3 className="text-2xl font-bold tracking-tighter">ЕИС Закупки</h3>
            <h3 className="text-2xl font-black text-blue-600 tracking-tight">Сбер А</h3>
            <h3 className="text-2xl font-bold italic tracking-widest text-red-600">B2B-Center</h3>
            <h3 className="text-2xl font-semibold tracking-tighter text-blue-800">РТС-Тендер</h3>
            <h3 className="text-2xl font-bold tracking-tighter text-orange-600">Фабрикант</h3>
          </div>
        </div>
      </section>

      {/* STICKY FEATURE SHOWCASE */}
      <section className="py-24 bg-muted/5 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Решение для каждого <br/> этапа работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">От первого поискового запроса до подписания контракта — мы автоматизировали всю рутину.</p>
          </div>
          
          <FeatureShowcase />
          
        </div>
      </section>

      {/* DETAILED BENEFITS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Почему именно Tender AI?</h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4 p-8 rounded-2xl bg-muted/20 border border-border">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h3 className="text-2xl font-bold">Экономия времени до 80%</h3>
              <p className="text-muted-foreground leading-relaxed">Вам больше не нужно читать сотни страниц ГОСТов и смет. Наша нейросеть за 5 секунд находит ключевые требования, риски и выводит их в удобном формате. Вы читаете только выжимку.</p>
            </div>
            <div className="space-y-4 p-8 rounded-2xl bg-muted/20 border border-border">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h3 className="text-2xl font-bold">Уведомления в Telegram</h3>
              <p className="text-muted-foreground leading-relaxed">Работайте откуда угодно. Как только на площадке появляется релевантный тендер, вы мгновенно получаете уведомление в Telegram со всеми ключевыми метриками и кнопкой "Участвуем".</p>
            </div>
            <div className="space-y-4 p-8 rounded-2xl bg-muted/20 border border-border">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h3 className="text-2xl font-bold">Интеллектуальный поиск</h3>
              <p className="text-muted-foreground leading-relaxed">Многие заказчики специально прячут закупки за нестандартными названиями или опечатками в ТЗ. Наш AI понимает смысл текста, а не просто ищет точные совпадения слов.</p>
            </div>
            <div className="space-y-4 p-8 rounded-2xl bg-muted/20 border border-border">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-bold text-xl mb-6">4</div>
              <h3 className="text-2xl font-bold">Прозрачная CRM</h3>
              <p className="text-muted-foreground leading-relaxed">Встроенная канбан-доска и воронка продаж. Назначайте ответственных, ставьте задачи юристам и контролируйте дедлайны по подаче заявок в едином окне.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg">С каких площадок собираются данные?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Мы агрегируем тендеры с ЕИС (44-ФЗ, 223-ФЗ, 615-ПП), а также с более чем 100 коммерческих площадок, включая B2B-Center, Фабрикант, ТЭК-Торг и многие другие. База обновляется в режиме реального времени.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg">Как работает AI-анализ?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                При нахождении нового тендера наша нейросеть скачивает все прикрепленные документы (Word, PDF, Excel), распознает текст и анализирует его по десяткам критериев: наличие аванса, штрафные санкции, требования к лицензиям, скрытые условия. Результат выдается в виде краткой выжимки на 1-2 абзаца.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg">Сколько стоит подписка?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                У нас есть бесплатный пробный период на 7 дней со всем функционалом. После этого вы можете выбрать один из тарифов в зависимости от размера вашей компании и количества необходимых профилей поиска. Подробности на странице "Тарифы".
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg">Нужна ли банковская карта для пробного периода?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Нет, для регистрации и старта бесплатного 7-дневного периода привязка банковской карты не требуется. Вы платите только в том случае, если решите продолжить использование сервиса.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
          <BarChart3 className="w-96 h-96" />
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы масштабировать продажи?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Оставьте рутину алгоритмам. Начните использовать Tender AI сегодня и сфокусируйтесь на победах.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-10 h-14 rounded-lg shadow-2xl hover:scale-105 transition-transform text-primary font-bold">
              <Link href="/register">
                Бесплатный доступ на 7 дней
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-10 h-14 rounded-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-colors font-medium">
              <Link href="/pricing">
                Тарифы
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <span className="font-bold text-xl mb-4 block">Tender AI</span>
              <p className="text-muted-foreground text-sm max-w-sm">
                Интеллектуальная система поиска, аналитики и управления государственными и коммерческими закупками.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/tenders" className="hover:text-primary transition-colors">Поиск тендеров</Link></li>
                <li><Link href="/dashboard" className="hover:text-primary transition-colors">Аналитика контрагентов</Link></li>
                <li><Link href="/profiles" className="hover:text-primary transition-colors">CRM для закупок</Link></li>
                <li><Link href="/pricing" className="hover:text-primary transition-colors">Тарифы</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">О нас</Link></li>
                <li><Link href="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Конфиденциальность</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Оферта</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Tender AI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
