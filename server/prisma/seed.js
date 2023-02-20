const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()

async function seed() {
  const password = await bcrypt.hash('123', 8)

  const createdUser = await prisma.user.create({
    data: {
      email: 'maxpower@email.com',
      password,
    },
  });

  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      password,
      role: 'ADMIN',
    }
  })

  const firstItem = await prisma.item.create({
    data: {
      name: 'Freddo Bar',
      imageUrl: 'https://m.media-amazon.com/images/I/51IT4nz675L._AC_SX679_.jpg',
      cost: 0.25
    }
  })
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
