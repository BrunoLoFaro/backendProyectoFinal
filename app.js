import express from 'express';
import { carritoRouter } from './routes/carrito.routes.js';
import { productosRouter } from './routes/productos.routes.js';
import { handleError } from './middleware/errorHandler.js';
import dotenv from 'dotenv';

dotenv.config({path: './config/.env'})

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/producto', productosRouter);
app.use('/carrito', carritoRouter);

app.use(handleError);