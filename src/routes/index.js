import express from 'express';
const routesIndex = express.Router();

routesIndex.get('/', (req, res) => {
  res.send('¡Hola desde la ruta principal!');
});


export default routesIndex;