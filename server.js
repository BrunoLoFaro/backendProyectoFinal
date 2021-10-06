//imports
import express from 'express';
import path, { resolve } from 'path'
import {Archivo} from './clases/claseArchivo.js';
import { ListaProductos,vLoteProductos} from './clases/claseListaProductos.js';
import { Carrito } from './clases/claseCarrito.js';

//instancias de las clases
let archProductos = new Archivo("productos.txt");
let archCarrito = new Archivo("carrito.txt");
let listaProd = new ListaProductos(vLoteProductos)
let carrito1 = new Carrito(1,"timestamp",[])

//server Express
const app = express();
const PORT = process.env.PORT;//process.env.PORT for GLITCH
const routerProductos = express.Router();
const routerCarrito = express.Router();

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
    //archProductos.guardar(listaProd)
});
server.on('error', error=>console.log('Error en servidor', error));


app.use(express.json());
app.use(express.urlencoded({extended: true}));

//rutas
app.use('/productos', routerProductos);
app.use('/carrito', routerCarrito);

let admin=true



//Métodos HTTP
routerProductos.get('/listar', (req,res, next)=>{
    try{
        let busq;
        actualizarLista(archProductos,listaProd).then(()=>{
            try{
                busq=listaProd.getLista()
            }
            catch(err){
                console.log(err)
                busq=err
            }
            finally{
                res.json(busq)
            }
        })       
    }
    catch(err){
        next(err)
    }
});


routerProductos.get('/listar/:codigo', (req,res, next)=>{
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
});


routerProductos.post('/agregar',(req,res,next)=>{
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
})

routerProductos.put('/actualizar', (req,res,next)=>{
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
});

routerProductos.delete('/borrar/:codigo', (req,res,next)=>{
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
});


routerCarrito.get('/listar', (req,res, next)=>{
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
});

routerCarrito.get('/listar/:codigo', (req,res, next)=>{
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
});

routerCarrito.post('/agregar/:codigo',(req,res, next)=>{
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
})

routerCarrito.delete('/borrar/:codigo', (req,res, next)=>{
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
});

async function actualizarLista(archivo, lista){
    let a = await archivo.leer()
    lista.setLista(archivo.vector)
}

const handleError = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
}
app.use(handleError);