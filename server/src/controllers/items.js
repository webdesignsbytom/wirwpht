const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');

const { findAllItems, findItemByName, createItem, findUrlByName } = require('../domain/items');

const getAllItems = async (req, res) => {
  console.log('getting all items...');

  try {
    const foundItems = await findAllItems();

    if (!foundItems) {
      return res.status(404).json({
        status: `404 Not Found`,
        message: `No items were found`,
        code: `404`,
      });
    }

    if (foundItems.length === 0) {
      return res.status(403).json({
        message: `Database is currently empty and no items were found`,
      });
    }

    return res.status(201).json({
      message: `Found ${foundItems.length} items`,
      code: `201`,
      data: foundItems,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      code: `500`,
      error: error.message,
      message: `Internal server error: ${error.message}, code: 500`,
    });
  }
};

const createNewItem = async (req, res) => {
  console.log('Creating new item');
  const { name, imageUrl, cost, effect, desc } = req.body;

  if (!name || !imageUrl || !cost || !effect || !desc) {
    return res.status(409).json({
      message: `Missing content in request`,
      code: `409`,
    });
  }

  try {
    const foundItem = await findItemByName(name);

    if (foundItem) {
      return res
        .status(409)
        .json({ error: `Item already exists`, code: `409` });
    }

    const foundUrl = await findUrlByName(imageUrl)

    if (foundUrl) {
      return res
        .status(409)
        .json({ error: `Item already exists with URl ${imageUrl}`, code: `409` });
    }

    const newItem = await createItem(name, imageUrl, cost, effect, desc)

    return res.status(201).json({
      message: `Item ${newItem.name} created`,
      code: `201`,
      data: newItem,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      code: `500`,
      error: error.message,
      message: `Internal server error: ${error.message}, code: 500`,
    });
  }
};

module.exports = {
  getAllItems,
  createNewItem,
};
