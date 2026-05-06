import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';
import routesIndex from './routes/index.js';
import routesAuth from './routes/auth.js';
import routesProducts from './routes/products.js';
import routesUsers from './routes/users.js';
import { verifyToken } from './middleware/authMiddleware.js';
import routesBilling from './routes/billing.js';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', routesIndex);
app.use('/auth', routesAuth);
app.use('/', verifyToken, routesProducts);
app.use('/', verifyToken, routesUsers);
app.use('/', verifyToken, routesBilling);

export default app;