import express from 'express';
import path, { resolve } from 'path'
import { carritoRouter } from './routes/carrito.routes.js';
import { productosRouter } from './routes/productos.routes.js';
import { handleError } from './middleware/errorHandler.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/productos', productosRouter);
app.use('/carrito', carritoRouter);
app.use(handleError);