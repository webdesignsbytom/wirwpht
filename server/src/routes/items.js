const express = require("express");
const {
    getAllItems,
    createNewItem,
} = require('../controllers/items');

const router = express.Router();

router.get('/', getAllItems)
router.post('/create', createNewItem)

module.exports = router;
