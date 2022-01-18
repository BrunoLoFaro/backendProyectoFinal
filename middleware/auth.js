import passport from 'passport'
import passportLocal from 'passport-local'
import {getUsuario_Nombre, getUsuario_Codigo} from '../controllers/usuario.controller.js'

const LocalStrategy = passportLocal.Strategy

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
