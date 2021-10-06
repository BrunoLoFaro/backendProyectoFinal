import {ListaProductos, vLoteProductos} from "../claseListaProductos.js"
import {Archivo} from './models/claseArchivo.js';

let listaProd = new ListaProductos(vLoteProductos)

export const getProducto = (req,res, next)=>{
    try{
        let busq;
        actualizarLista(archProductos,listaProd).then(()=>{
            try{
                busq=listaProd.getLista()
                res.json(busq)
            }
            catch(err){
                next(err)
            }
        })       
    }
    catch(err){
        next(err)
    }
};


export const getProducto_Codigo = (req,res, next)=>{
    try{
        let params = req.params;
        let codigo = params.codigo;
        let busq;
        actualizarLista(archProductos,listaProd).then(()=>{
            try{
                busq=listaProd.getProductoByCode(codigo)
                res.json(busq)
            }
            catch(err){
                next(err)
                busq=err
            }
        })
    }
    catch(err)
    {
        next(err)
    }
};


export const postProducto = (req,res,next)=>{
try{
    if (admin)
    {
            let date = Date.now()
            let prod = req.body;
            let incorporado;
                actualizarLista(archProductos,listaProd).then(()=>{
                    try{
                        prod.timestamp=date
                        incorporado=listaProd.setProducto(prod)
                        archProductos.guardar(listaProd.getLista())
                        res.json(incorporado)
                    }
                    catch(err){
                        next(err)
                    }
                }) 
    }
    else{
        throw new Error({Error:-1,descripcion:`ruta 'productos' metodo /agregar no autorizada`});
    }
}
catch(err)
{
    next(err)
}
};

export const putProducto =  (req,res,next)=>{
try{
    if (admin){
        let prod = req.body;
        let actualizado;
            actualizarLista(archProductos,listaProd).then(()=>{
                try{
                    actualizado=listaProd.udpdateProducto(prod)
                    archProductos.guardar(listaProd.getLista())
                    res.json(actualizado)                    
                }
                catch(err){
                    next(err)
                }
            })  
    }
    else{
        throw new Error({Error:-1,descripcion:`ruta 'productos' metodo /actualizar no autorizada`});
    }
}
catch(err)
{
    next(err)
}
};

export const deleteProducto = (req,res,next)=>{
try{
    if(admin){
            actualizarLista(archProductos,listaProd).then(()=>{
            let params = req.params;
            let codigo = params.codigo;
            let eliminado
            try{
                eliminado=listaProd.getProductoByCode(codigo)
                listaProd.eliminateProducto(codigo)
                archProductos.guardar(listaProd.getLista())
                res.json({eliminado});
            }
            catch(err){
                next(err)
            }
        })
    }
    else{
        throw new Error({Error:-1,descripcion:`ruta 'productos' metodo /eliminar no autorizada`});
    }
}
catch(err)
{
    next(err)
}
};

