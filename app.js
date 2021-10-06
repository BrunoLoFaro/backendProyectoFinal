import express from 'express';
import path, { resolve } from 'path'
import { carritoRoutes } from '/routes/carrito.routes.js';
import { productosRouter } from '/routes/productos.routes.js';
import { handleError } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/productos', routerProductos);
app.use('/carrito', routerCarrito);
app.use(handleError);

