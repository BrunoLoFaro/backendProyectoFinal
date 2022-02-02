import {persistence} from '../dao/persistence.js'
import {model} from '../models/carrito.model.js'

export const getCarrito = (req,res, next)=>{
    try{
        persistence.Read_all(model)
        .then((response)=>{
            res.json(response)
        })
    }
        catch(err){
    }
};

export const getCarrito_Codigo = (req,res, next)=>{
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

export const patchCarrito =  (req,res,next)=>{
    /*let id = req.params.id
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
    }*/
};
export const putCarrito =  (req,res,next)=>{
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
export const deleteCarrito = (req,res,next)=>{
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

export const postCarrito = (req,res,next)=>{
    //if (admin)
        try{
            let prod = req.body;
            persistence.Create(model, prod)
            .then((response)=>{
                res.json(response)
            })
            //Math.round(+new Date()/1000)
        }
        catch(err)
        {
            console.log(err)
            next(err)
        }

};
export const postAddProd = (req,res,next)=>{
    //if (admin)
        try{
            let prod = req.body;
            persistence.Create(model, prod)
            .then((response)=>{
                res.json(response)
            })
            //Math.round(+new Date()/1000)
        }
        catch(err)
        {
            next(err)
        }

};
