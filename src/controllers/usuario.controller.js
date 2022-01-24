import {persistence} from '../dao/persistence.js'
import {model} from '../models/usuario.model.js'

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
   console.log(res)
   return res
}
catch(err)
{
    next(err)
}
};

export async function searchUsuario_Nombre(nombre){
        let qry = {nombre : nombre}
    try{
       let response = await persistence.Read_qry(model, qry)
       console.log(response)
            return response
    }
    catch(err)
    {
        console.log(err)
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
    console.log(req.params.id)
    console.log(update)
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
export const deleteUsuario = (req,res,next)=>{
    let id = req.params.id
    let qry = {'id': id}
    try{
        //if(admin){
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
            let prod = req.body;
            persistence.Create(model, prod)
            .then((response)=>{
                res.json(response)
            })
        }
        catch(err)
        {
            next(err)
        }

};

export async function postUsuarioN(usuario){//for passport
    //if (admin)
    console.log(usuario)
        try{
            let response = await persistence.Create(model, usuario)
            return response
        }
        catch(err)
        {
            console.log(err)
        }

};