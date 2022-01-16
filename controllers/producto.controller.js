import {persistence} from '../dao/persistence.js'
import {model} from '../models/producto.model.js'

export const getProducto = (req,res, next)=>{
    try{
        persistence.Read(model)
        .then((response)=>{
            res.json(response)
        })
    }
        catch(err){
    }
};

export const getProducto_Codigo = (req,res, next)=>{
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

export const putProducto =  (req,res,next)=>{
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
export const deleteProducto = (req,res,next)=>{
    try{
        //if(admin){

            persistence.Delete(model,req)
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

export const postProducto = (req,res,next)=>{
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