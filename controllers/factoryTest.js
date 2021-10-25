import {persistenceFactory} from '../middleware/persistence_factory.js'
import * as productoModel from '../models/producto.model.js'
import * as mensajeModel from '../models/carrito.model.js'

const f = new persistenceFactory();
const persistence = f.create(4)


export const getProducto = (req,res, next)=>{
    try{
        persistence.Read(productoModel.productos)
    }
        catch(err){
    }
};

export const getProducto_Codigo = (req,res, next)=>{
        let params = req.params;
        let codigo = params.id;
    try{
       persistence.Read_find(productoModel.productos, codigo)       
    }
    catch(err)
    {
        next(err)
    }
};

export const putProducto =  (req,res,next)=>{
    try{
        //if (admin){
        persistence.Update(productoModel.productos,req)
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

            persistence.Delete(productoModel.productos,req)
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
                //let prod = req.body;
                let prod =     {
                    nombre: "Dan Brown - La fortaleza digital",
                    precio: 434,
                    foto: "https://bibliotecaquijote.files.wordpress.com/2012/02/la-fortaleza-digital.jpg",
                    descripcion:"bestseller thriller",
                    codigo:"AS4224",        
                    id: 2
                }
                persistence.Create(productoModel.productos, prod);
        }
        catch(err)
        {
            next(err)
        }

};

persistence.Connect()
.then(()=>{
})