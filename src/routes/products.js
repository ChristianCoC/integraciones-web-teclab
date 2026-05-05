import express from 'express';
import { getProducts, getProductById } from '../controllers/productsControllers.js';

const routesProducts = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     tags:
 *       - Productos
 *     summary: Obtener todos los productos
 *     description: Devuelve lista de productos con paginación opcional
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: number
 *           default: 1
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: number
 *           default: 10
 *     responses:
 *       200:
 *         description: Lista de productos
 *       401:
 *         description: Token requerido
 */
routesProducts.get("/products", getProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     tags:
 *       - Productos
 *     summary: Obtener producto por ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Producto encontrado
 *       404:
 *         description: Producto no encontrado
 *       401:
 *         description: Token requerido
 */
routesProducts.get("/products/:id", getProductById);

export default routesProducts;