import session from 'express-session';
import passport from 'passport'
import passportLocal from 'passport-local'
import {getUsuario_Nombre, getUsuario_Codigo} from '../controllers/usuario.controller.js'
import {app} from "../app.js"
import { loginRouter } from '../routes/login.js';

const LocalStrategy = passportLocal.Strategy

app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use('login', new LocalStrategy({
    passReqToCallback : true
},
function(req,username,password,done){
    getUsuario_Nombre(username)
    .then((e)=>{
        console.log(e)
        return done(null,username)
    })
}))

passport.serializeUser((user, done)=>{
    done(null, user._id);
});

passport.deserializeUser((id, done)=>{
    let usuario = getUsuario_Codigo(usuarios, id);
    done(null, usuario);
});

app.get('/login', loginRouter.getLogin);
app.post('/login', passport.authenticate('login', {failureRedirect: '/faillogin'}), loginRouter.postLogin);

export function checkAuthentication(req, res, next){
    if (req.isAuthenticated()){
        next();
    } else {
        res.redirect('/');
    }
}

function getLogin(req, res){
    if (req.isAuthenticated()){
        let user = req.user;
        console.log('Usuario logueado');
        res.json(user);
    } else {
        console.log('Usuario no logueado');
        res.redirect('/');
    }
}
export {app}
