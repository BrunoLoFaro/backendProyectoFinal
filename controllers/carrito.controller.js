import {persistence} from '../dao/persistence.js'
import {carritoModel}  from '../models/Carrito.model.js'

export const getCarrito = (req,res, next)=>{
    try{
        persistence.Read(carritoModel)
        .then((response)=>{
            res.json(response)
        })
    }
        catch(err){
    }
};

export const getCarrito_Codigo = (req,res, next)=>{
        let params = req.params;
        let codigo = params.id;
    try{
       persistence.Read_find(carritoModel, codigo)
       .then((response)=>{
            res.json(response)
        })
    }
    catch(err)
    {
        next(err)
    }
};

export const putCarrito =  (req,res,next)=>{
    try{
        //if (admin){
        persistence.Update(carritoModel,req)
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
export const deleteCarrito = (req,res,next)=>{
    try{
        //if(admin){

            persistence.Delete(carritoModel,req)
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

export const postCarrito = (req,res,next)=>{
    //if (admin)
        try{
            let prod = req.body;
            persistence.Create(carritoModel, prod)
            .then((response)=>{
                res.json(response)
            })
        }
        catch(err)
        {
            next(err)
        }

};