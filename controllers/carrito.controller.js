import {persistence} from '../dao/persistence.js'
import {carritoModel}  from '../models/Carrito.model.js'

export const getCarrito = (req,res, next)=>{
    try{
        persistence.Read(carritoModel)
    }
        catch(err){
    }
};

export const getCarrito_Codigo = (req,res, next)=>{
        let params = req.params;
        let codigo = params.id;
    try{
       persistence.Read_find(carritoModel, codigo)       
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
                persistence.Create(carritoModel, prod);
        }
        catch(err)
        {
            next(err)
        }

};

persistence.Connect()
.then(()=>{
    persistence.showInfo()
})