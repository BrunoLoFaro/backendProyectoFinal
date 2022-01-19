import {persistence} from '../dao/persistence.js'
import {model} from '../models/usuario.model.js'

export const getUsuario = (req,res, next)=>{
    try{
        persistence.Read(model)
        .then((response)=>{
            res.json(response)
        })
    }
        catch(err){
    }
};

export const getUsuario_Codigo = (req,res, next)=>{
        let params = req.params;
        let codigo = params.id;
    try{
       persistence.Read_find(model, codigo)
       .then((response)=>{
            res.json(response)
        })   
    }
    catch(err)
    {
        next(err)
    }
};

export const getUsuario_Nombre = (req,res, next)=>{
        let params = req.params;
        let nombre = params.nombre;
        let qry = {nombre : nombre}
    try{
       persistence.Read_find(model, qry)
       .then((response)=>{
            res.json(response)
        })   
    }
    catch(err)
    {
        next(err)
    }
};
export const putUsuario =  (req,res,next)=>{
    let id = req.params.id
    let prod = req.body;
    let qry = {'id': id}
    let update = {$set: prod}
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