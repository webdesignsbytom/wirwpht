const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllItems = () => prisma.item.findMany({});


module.exports = {
  findAllItems
}
