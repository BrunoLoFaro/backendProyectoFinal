import {ListaProductos, vLoteProductos} from "../models/claseListaProductos.js"
import {Archivo} from '../models/claseArchivo.js';
import {admin} from "../constants/index.js"

export let listaProd = new ListaProductos(vLoteProductos)
export let archProductos = new Archivo("../data/productos.txt")

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
        let codigo = params.id;
        let busq;
        actualizarLista(archProductos,listaProd).then(()=>{
            try{
                busq=listaProd.getProductoByIds(id)
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
if (admin)
{
    try{
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
                        console.log("post  !!! "+err)
                        next(err)
                    }
                }) 
    }
    catch(err)
    {
        next(err)
    }
}
else{
    throw new Error({Error:-1,descripcion:`ruta 'productos' metodo /agregar no autorizada`});
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

async function actualizarLista(archivo, lista){
    let a = await archivo.leer()
    lista.setLista(archivo.vector)
}