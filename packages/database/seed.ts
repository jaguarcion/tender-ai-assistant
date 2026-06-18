import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  
  // Create an admin user
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'ADMIN',
    },
  });
  
  // Create a search profile
  const profile = await prisma.searchProfile.create({
    data: {
      userId: admin.id,
      name: 'Поставка ПО',
      keywords: ['лицензии', 'ПО', 'Windows', 'Microsoft'],
      regions: ['Москва'],
    },
  });

  console.log({ admin, profile });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
