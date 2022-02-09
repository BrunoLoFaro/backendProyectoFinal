import {Router} from "express"
import * as methods from '../util/auth.methods.js';
import passport from 'passport';
export const authRouter = Router()

authRouter
.post('/signup', methods.postSignUp,
    passport.authenticate('signup', {failureRedirect: '/auth/failsignup'}))
.post('/failsignup', methods.failSignUp)
.post('/login',
    passport.authenticate('login',{failureRedirect: '/auth/faillogin'}),
    methods.postLogin)
.post('/faillogin', methods.failLogin)
.get('/logout', methods.logout)