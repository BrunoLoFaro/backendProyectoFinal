import { Carrito } from '../models/claseCarrito.js';
import { listaProd, archProductos } from './productos.controller.js';
import {Archivo} from '../models/claseArchivo.js';

let carrito1 = new Carrito(1,"timestamp",[])
let archCarrito = new Archivo("../data/carrito.txt");

export const getCarrito = (req,res, next)=>{
    try{
        let busq;
        actualizarLista(archCarrito,carrito1.listaProd).then(()=>{
            try{
                busq=carrito1.listaProd.getLista()
                res.json(busq)
            }
            catch(err){
                next(err)
            }
        })
    }
    catch(err)
    {
        next(err)
    }
};
    //get producto del carrito
export const getCarrito_Codigo = (req,res, next)=>{
    try{
    let params = req.params;
    let codigo = params.codigo;
    let busq;
    actualizarLista(archCarrito,carrito1.listaProd).then(()=>{
        try{
            busq=carrito1.listaProd.getProductoByCode(codigo)
            res.json(busq)
        }
        catch(err){
            next(err)
        }
    })
}
catch(err)
{
    next(err)
}
};

export const postCarrito = (req,res, next)=>{
    try{
        let params = req.params;
        let codigo = params.codigo;
        let busq
                //actualizo el vector de productos
                actualizarLista(archProductos,listaProd).then(()=>{
                //busco el producto
                    try{
                        busq=listaProd.getProductoByCode(codigo)
                    }
                    catch(err){
                        next(err)
                    }
                }).then(()=>{
                actualizarLista(archCarrito,carrito1.listaProd).then(()=>{
                    let incorporado
                    try{
                        incorporado=carrito1.listaProd.setProducto(busq)
                        archCarrito.guardar(carrito1.listaProd.getLista())
                        res.json(incorporado)
                    }
                    catch(err){
                        next(err)
                    }
                })
            })
        }
        catch(err)
        {
            next(err)
        }
};

export const deleteCarrito = (req,res, next)=>{
    try{
            actualizarLista(archCarrito,carrito1.listaProd).then(()=>{
            let params = req.params;
            let codigo = params.codigo;
            let eliminado
            try{
                eliminado=carrito1.listaProd.getProductoByCode(codigo)
                carrito1.listaProd.eliminateProducto(codigo)
                archCarrito.guardar(carrito1.listaProd.getLista())
                res.json({eliminado});
            }
            catch(err){
                next(err)
            }
        })
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