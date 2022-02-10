import nodemailer from 'nodemailer'
import * as mail from './mail.config.js'
import {logger} from '../middleware/logger.config.js'

export function postLogin(req, res){
    res.json('loggeado');
}

export function failLogin(req, res){
    res.json('login fallado');
}

export async function postSignUp(req, res, next){
    //let info = await mail.transporter.sendMail(mail.mail);
    //logger.info("Message sent: %s", info.messageId);
    //logger.info("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    next()
    res.json('loggeado');
}

export function failSignUp(req, res){
    res.json('signup fallado');
}

export function logout(req, res){
    req.logout();
    res.json('desloggeado');
}

export function failRoute(req, res){
    res.status(404).send('Ruta no encontrada');
}

export function checkAuthentication(req, res, next){
    if (req.isAuthenticated()){
        next();
    } else {
        res.json('debe loggearse');
    }
}

export const checkIsInRole = (...roles) => (req, res, next) => {

    if (!req.user) {
        return res.status(500).json({
            type: "Authentication error",
            msg: "Not logged in"
        })
    }
    const hasRole = roles.find(role => req.user[0].rol == role)

    if (!hasRole) {
        return res.status(500).json({
            type: "Permission Denied",
            msg: "The current user has no permission"
        })
    }

    return next()
}