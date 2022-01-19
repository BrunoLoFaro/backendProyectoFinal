import express from 'express';
import { carritoRouter } from './routes/carrito.routes.js';
import { productoRouter } from './routes/producto.routes.js';
import { usuarioRouter } from './routes/usuario.routes.js';
import { handleError } from './middleware/errorHandler.js';

export const app = express();

import  cors  from 'cors';
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/producto', productoRouter);
app.use('/carrito', carritoRouter);
app.use('/usuario', usuarioRouter);
app.use(handleError);