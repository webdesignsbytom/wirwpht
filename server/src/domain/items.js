const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllItems = () => prisma.item.findMany({});

const findItemByName = (name) => prisma.item.findFirst({
  where: {
    name: name
  }
})

const findUrlByName = (imageUrl) => prisma.item.findFirst({
  where: {
    imageUrl: imageUrl
  }
})

const createItem = (name, imageUrl, cost, effect, desc) => prisma.item.create({
  data: {
    name: name,
    imageUrl: imageUrl,
    cost: cost,
    effect: effect,
    desc: desc
  }
})


module.exports = {
  findAllItems,
  findItemByName,
  createItem,
  findUrlByName
}
