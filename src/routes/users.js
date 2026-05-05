import express from 'express';
import { getUsers, getUsersById } from '../controllers/usersControllers.js';

const routesUsers = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: Obtener todos los usuarios
 *     description: Devuelve lista de todos los usuarios (requiere autenticación)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   nationality:
 *                     type: string
 *       401:
 *         description: Token no proporcionado
 *       403:
 *         description: Token inválido
 */
routesUsers.get("/users", getUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: Obtener usuario por ID
 *     description: Devuelve un usuario específico (requiere autenticación)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 nationality:
 *                   type: string
 *       404:
 *         description: Usuario no encontrado
 *       401:
 *         description: Token no proporcionado
 */
routesUsers.get("/users/:id", getUsersById);

export default routesUsers;