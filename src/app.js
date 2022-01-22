//al menos localmente no funciona ejecutado desde la raiz. sí, desde /src
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import  cors  from 'cors';
import './middleware/auth.js'
import { authRouter } from './routes/auth.routes.js';
import { carritoRouter } from './routes/carrito.routes.js';
import { productoRouter } from './routes/producto.routes.js';
import { usuarioRouter } from './routes/usuario.routes.js';
import { handleError } from './middleware/errorHandler.js';

export const app = express();

app.use(express.static('public'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/producto', productoRouter);
app.use('/carrito', carritoRouter);
app.use('/usuario', usuarioRouter);
app.use(handleError);