import {Router} from "express"
import {getLogin, postLogin, checkAuthentication} from "../util/login.methods.js"
import passport from 'passport';

export const loginRouter = Router()

loginRouter
    .get('/', checkAuthentication, ()=>{console.log("is auth")})
    .post('/', passport.authenticate('login', {failureRedirect: '/faillogin'}), postLogin)
