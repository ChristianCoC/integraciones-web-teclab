import express from "express";
import { login } from "../controllers/authControllers.js";

const routesAuth = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - Autenticación
 *     summary: Login de usuario
 *     description: Autentica un usuario y devuelve un JWT token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: juan.perez@example.com
 *               password:
 *                 type: string
 *                 example: juan123
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *       401:
 *         description: Credenciales inválidas
 *       400:
 *         description: Email y password requeridos
 */
routesAuth.post("/login", login);

export default routesAuth;