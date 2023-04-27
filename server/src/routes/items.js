import { Router } from 'express';
import {
    getAllItems,
    createNewItem,
} from '../controllers/items.js'

const router = Router();

router.get('/', getAllItems)
router.post('/create', createNewItem)

export default router;
