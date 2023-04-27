const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()

async function seed() {
  const password = await bcrypt.hash('123', 8)

  const createdUser = await prisma.user.create({
    data: {
      email: 'maxpower@email.com',
      password,
      username: 'testuser'
    },
  });

  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      password,
      role: 'ADMIN',
      username: 'adminUser'
    }
  })

  const developerUser = await prisma.user.create({
    data: {
      email: 'dev@dev.com',
      password,
      role: 'DEVELOPER',
      username: 'developerUser'
    }
  })

  const firstItem = await prisma.item.create({
    data: {
      name: 'Freddo Bar',
      imageUrl: 'https://m.media-amazon.com/images/I/51IT4nz675L._AC_SX679_.jpg',
      cost: 0.25,
      desc: ''
    }
  })
  const secondItem = await prisma.item.create({
    data: {
      name: 'Playstation 5',
      imageUrl: 'https://media.direct.playstation.com/is/image/psdglobal/PS5-console-front',
      cost: 600,
      desc: ''
    }
  })
  const thirdItem = await prisma.item.create({
    data: {
      name: 'Tesla',
      imageUrl: 'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1670502844/autoexpress/2022/12/Baby%20Tesla%20exclusive%20images.jpg',
      cost: 40000,
      desc: ''
    }
  })
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
