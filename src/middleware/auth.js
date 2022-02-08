import passport from 'passport'
import passportLocal from 'passport-local'//passportLocal.strategy?
import {searchUsuario_Alias, searchUsuario_Codigo, postUsuarioN} from '../controllers/usuario.controller.js'
import bcrypt from 'bcrypt'
const saltRounds = 10;
import {logger} from './logger.config.js'

//although alias is used to find a user in the db. The req param is username

let LocalStrategy = passportLocal.Strategy
passport.use('signup', new LocalStrategy({
        passReqToCallback : true,
        usernameField: 'alias',
        passwordField: 'password'
    },
    function(req, alias, password, done) {
        let reqUser = req.query
    try{
    searchUsuario_Alias(alias)
    .then((usuario)=>{
        if (usuario.length != 0){
            return done(null, false, logger.warn(usuario.alias, 'Usuario ya existe'));
        }
        else {
            bcrypt.hash(password, saltRounds)
            .then(encryptedPassword=>{
                let nuevoUsuario = {
                    id: reqUser.id,//setear id autom.
                    password: encryptedPassword,//add encription
                    nombre: reqUser.username,
                    apellido: reqUser.apellido,
                    edad: reqUser.edad,
                    alias: alias,
                    avatar: reqUser.avatar
                }
                postUsuarioN(nuevoUsuario);
                return done(null, nuevoUsuario)
            })
        }
        })
    }
    catch(e){
        logger.warn(e)
    }
}))

passport.use('login', new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'alias',
        passwordField: 'password'
    }, 
    function (req, alias, password, done) {
    try{
        searchUsuario_Alias(alias)
        .then((usuario)=>{
            if (usuario.length === 0) {
                return done(null, false, logger.warn(alias, 'usuario no existe'));
            } else {
                bcrypt.compare(password, usuario[0].password).then((comparison)=>{
                    if (comparison) {
                        return done(null, usuario)
                    } else {
                        return done(null, false, logger.warn(alias, 'password errónea'));
                    }
                })
            }
        })
    }
    catch(e){
        logger.warn(e)
    }
    })
)

passport.serializeUser((user, done)=>{
    done(null, user[0].id);
})

passport.deserializeUser((id, done)=>{
    let usuario = searchUsuario_Codigo(id);
    done(null, usuario);
})