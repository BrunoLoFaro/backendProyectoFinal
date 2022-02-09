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
import {failRoute,checkAuthentication} from './util/auth.methods.js';
import {checkIsInRole} from './util/auth.methods.js';
import {ROLES} from './constants/constants.js';

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
app.use('/producto', checkAuthentication, productoRouter);
app.use('/carrito', checkAuthentication, carritoRouter);
app.use('/usuario', checkAuthentication, checkIsInRole(ROLES.Admin),usuarioRouter);
app.get('*', failRoute);
app.use(handleError);