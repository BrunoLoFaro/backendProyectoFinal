    import passport from 'passport'
    import passportLocal from 'passport-local'//passportLocal.strategy?
    import {searchUsuario_Nombre, searchUsuario_Codigo, postUsuarioN} from '../controllers/usuario.controller.js'

    let LocalStrategy = passportLocal.Strategy
    passport.use('signup', new LocalStrategy({
        passReqToCallback : true
    },
    function(req, username, password, done) {
        let reqUser = req.query
try{
    searchUsuario_Nombre(username)
    .then((usuario)=>{
        if (usuario.length != 0){
            return done(null, false, console.log(usuario.nombre, 'Usuario ya existe'));
        }
        else {
            let nuevoUsuario = {
                id: reqUser.id,//setear id autom
                password: password,//add encription
                nombre: username,
                apellido: reqUser.apellido,
                edad: reqUser.edad,
                alias: reqUser.alias,
                avatar: reqUser.avatar
            }
            postUsuarioN(nuevoUsuario);
            return done(null, nuevoUsuario)
        }
        })
    }
    catch(e){
        console.log(e)
    }
    }))

    passport.use('login', new LocalStrategy({
            passReqToCallback: true
        }, 
        function (req, username, password, done) {
try{
    searchUsuario_Nombre(username)
            .then((usuario)=>{
                if (usuario.length === 0) {
                    return done(null, false, console.log(username, 'usuario no existe'));
                } else {
                    if (usuario[0].password == password) {
                        return done(null, usuario)  
                    } else {
                        return done(null, false, console.log(username, 'password errónea'));
                    }
                }
            })
        }
        catch(e){
            console.log(e)
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