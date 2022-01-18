import express from 'express';
import session from 'express-session';
import { carritoRouter } from './routes/carrito.routes.js';
import { productoRouter } from './routes/producto.routes.js';
import { usuarioRouter } from './routes/usuario.routes.js';
import { loginRouter } from './routes/login.js';
import { handleError } from './middleware/errorHandler.js';

export const app = express();

app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

import './middleware/auth.js';
import  cors  from 'cors';

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/producto', productoRouter);
app.use('/carrito', carritoRouter);
app.use('/usuario', usuarioRouter);
app.get('/login', loginRouter.getLogin);
app.post('/login', passport.authenticate('login', {failureRedirect: '/faillogin'}), loginRouter.postLogin);

app.use(handleError);