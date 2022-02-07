import express from 'express';
import { createProducts, getProducts, updateProducts } from '../controlers/products.js';

const product_routes = express.Router();


product_routes.get('/', getProducts);
product_routes.post('/', createProducts);
product_routes.patch('/', updateProducts);

export default product_routes;