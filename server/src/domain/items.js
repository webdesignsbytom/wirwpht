import dbClient from '../utils/dbClient.js';

export const findAllItems = () => dbClient.item.findMany({});

export const findItemByName = (name) =>
  dbClient.item.findFirst({
    where: {
      name: name,
    },
  });

export const findUrlByName = (imageUrl) =>
  dbClient.item.findFirst({
    where: {
      imageUrl: imageUrl,
    },
  });

export const createItem = (name, imageUrl, cost, effect, desc) =>
  dbClient.item.create({
    data: {
      name: name,
      imageUrl: imageUrl,
      cost: cost,
      effect: effect,
      desc: desc,
    },
  });
