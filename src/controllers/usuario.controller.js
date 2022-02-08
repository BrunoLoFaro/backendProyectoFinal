import {persistence} from '../dao/persistence.js'
import {model} from '../models/usuario.model.js'
import fs from 'fs'
import path from 'path'
const __dirname = path.dirname('C:/Users/Bruno/Desktop/proyecto_final/src/');
import {logger} from '../middleware/logger.config.js'

export const getUsuario = (req,res, next)=>{
    try{
        persistence.Read_all(model)
        .then((response)=>{
            res.json(response)
        })
    }
        catch(err){
    }
};

export const getUsuario_Codigo = (req,res, next)=>{
    let params = req.params;
    let id = params.id;
    let qry = {id: id}
        try{
        persistence.Read_qry(model, qry)
        .then((response)=>{
                res.json(response)
            })   
        }
        catch(err)
        {
            next(err)
        }
};

export async function searchUsuario_Codigo(id){
let qry = {id: id}
    try{
        let res = await persistence.Read_qry(model, qry)
        return res
    }
    catch(err)
    {
        logger.warn(err)
    }
};

export async function searchUsuario_Alias(alias){
        let qry = {alias : alias}
    try{
       let response = await persistence.Read_qry(model, qry)
            return response
    }
    catch(err)
    {
        logger.warn(err)
    }
};
export const getUsuario_Nombre = (req,res, next)=>{
        let params = req.params;
        let nombre = params.nombre;
        let qry = {nombre : nombre}
    try{
       persistence.Read_qry(model, qry)
       .then((response)=>{
            res.json(response)
        })   
    }
    catch(err)
    {
        next(err)
    }
};
export const patchUsuario =  (req,res,next)=>{
    let id = req.params.id
    let obj = req.body;
    let qry = {'id': id}
    let update = {$set: obj}
    try{
        persistence.Update(model,qry, update)
        .then((response)=>{
            //res.send(response)
            next()
        })
    }
    catch(err)
    {
        //console.log(err)
        next(err)
    }
};
export async function updateAvatar(req,res,next){
    let id = req.params.id
    let qry = {'id': id}
    let user = await persistence.Read_qry(model,qry)
    if(user.length===0){
        return res.status(500).json({
            type: "User Not Found",
            msg: "Invalid request"
        })
    }
    user[0].avatar = user[0]._id + '.jpg'
        try{
            persistence.partialUpdate(user[0])
            .then((response)=>{
                next()
                res.send(response)
            })
        }
        catch(err)
        {
            next(err)
        }
}
export const putUsuario =  (req,res,next)=>{
    let id = req.params.id
    let obj = req.body;
    let qry = {'id': id}
    let update = {$set: obj}
    try{
        //if (admin){
        persistence.Update(model,qry, update)
        .then((response)=>{
            res.json(response)
        })
    }
    catch(err)
    {
        //console.log(err)
        next(err)
    }
};
export async function deleteUsuario(req,res,next){
    let id = req.params.id
    let qry = {'id': id}
    try{
        //if(admin){
        let user = await persistence.Read_qry(model,qry)
        if(user.length===0){
            return res.status(500).json({
                type: "User Not Found",
                msg: "Invalid request"
            })
        }
        let relativePath = '/src/public/'+user[0]._id+'.jpg'     
        fs.unlink(path.join(__dirname, relativePath), function (err) {
            if (err) throw err;
            logger.warn('File deleted!');
        });
        persistence.Delete(model,qry)
        .then((response)=>{
            res.json(response)
        })
    }
    catch(err)
    {
        //console.log(err)
        next(err)
    }
};

export const postUsuario = (req,res,next)=>{
    //if (admin)
        try{
            let  user = req.body;
            /*user.avatar = user.alias+'.jpg'
            user.contentType = 'image/png'*/
            persistence.Create(model, user)
            .then((response)=>{
                next()
                res.json(response)
            })
        }
        catch(err)
        {
            next(err)
        }

};

export async function postUsuarioN(usuario){//for passport
        try{
            let response = await persistence.Create(model, usuario)
            return response
        }
        catch(err)
        {
            logger.warn(err)
        }

};