import express from 'express';
import { getAllProducts, getAllProductsStatic } from '../controllers/products.js';

const router = express.Router();

//api/v1/products/

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);

export default router;