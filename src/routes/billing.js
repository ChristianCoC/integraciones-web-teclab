import express from "express";
import { getBillingInfo, validateBillingInfo } from "../controllers/billingControllers.js";

const routesBilling = express.Router();

/**
 * @swagger
 * /billing:
 *   get:
 *     tags:
 *       - Facturación
 *     summary: Obtener información de facturación
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Información obtenida
 *       404:
 *         description: Sin información de facturación
 *       401:
 *         description: Token requerido
 */
routesBilling.get("/billing", getBillingInfo);

/**
 * @swagger
 * /billing/validate:
 *   get:
 *     tags:
 *       - Facturación
 *     summary: Validar información de facturación
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Facturación válida
 *       400:
 *         description: Campos faltantes
 */
routesBilling.get("/billing/validate", validateBillingInfo);

export default routesBilling;