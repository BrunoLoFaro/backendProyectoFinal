//export function setPassport(){
    import passport from 'passport'
    import passportLocal from 'passport-local'
    import {getUsuario_Nombre, getUsuario_Codigo} from '../controllers/usuario.controller.js'

    const LocalStrategy = passportLocal.Strategy

    passport.use('login', new LocalStrategy({
        passReqToCallback : true
    },

    function(req,username,password,done){
        console.log("en auth")
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
    export {passport}
//}