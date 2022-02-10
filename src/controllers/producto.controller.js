import {persistence} from '../dao/persistence.js'
import {model} from '../models/producto.model.js'

export const getProducto = (req,res, next)=>{
    try{
        persistence.Read_all(model)
        .then((response)=>{
            res.json(response)
        })
    }
        catch(err){
    }
};

export const getProducto_Codigo = (req,res, next)=>{
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

export const patchProducto =  (req,res,next)=>{
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

export const putProducto =  (req,res,next)=>{
    let id = req.params.id
    let prod = req.body;
    let qry = {'id': id}
    let update = {$set: prod}
    try{
        persistence.Update(model,qry, update)
        .then((response)=>{
            res.json(response)
        })
    }
    catch(err)
    {
        next(err)
    }
};
export const deleteProducto = (req,res,next)=>{
    let id = req.params.id
    let qry = {'id': id}
    try{
        persistence.Delete(model,qry)
        .then((response)=>{
            res.json(response)
        })
    }
    catch(err)
    {
        next(err)
    }
};

export const postProducto = (req,res,next)=>{
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