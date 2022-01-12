import {persistence} from '../dao/persistence.js'
import {productoModel} from '../models/producto.model.js'

export const getProducto = (req,res, next)=>{
    try{
        persistence.Read(productoModel)
    }
        catch(err){
    }
};

export const getProducto_Codigo = (req,res, next)=>{
        let params = req.params;
        let codigo = params.id;
    try{
       persistence.Read_find(productoModel, codigo)       
    }
    catch(err)
    {
        next(err)
    }
};

export const putProducto =  (req,res,next)=>{
    try{
        //if (admin){
        persistence.Update(productoModel,req)
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

            persistence.Delete(productoModel,req)
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
                persistence.Create(productoModel, prod);
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