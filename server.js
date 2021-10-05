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
routerProductos.get('/listar/:id', (req,res)=>{
    let params = req.params;
    let id = params.id;
    let busq;
    actualizarLista(archProductos,listaProd).then(()=>{
        try{
            busq=listaProd.getProducto(id)
        }
        catch(err){
            console.log(err)
            busq=err
        }
        finally{
            res.json(busq)
        }
    })
});


routerProductos.post('/agregar',(req,res)=>{
    if (admin)
    {
            let date = Date.now()
            let prod = req.body;
            let incorporado;
        //    try{
                actualizarLista(archProductos,listaProd).then(()=>{
                    try{
                        prod.timestamp=date
                        incorporado=listaProd.setProducto(prod)
                        archProductos.guardar(listaProd.getLista())
                    }
                    catch(err){
                        console.log(err)
                        incorporado=err
                    }
                    finally{
                        res.json(incorporado)
                    }
                })
        //   }
        //    catch(e){
        //    console.log(e)
        //    }   
    }
    else{
        res.json({Error:-1,descripcion:`ruta 'productos' metodo /agregar no autorizada`});
    }
})

routerProductos.put('/actualizar/:id/:titulo/:precio/:imagen', (req,res)=>{
    if (admin){
        let prod = req.body;
        let actualizado;
    //    try{
            actualizarLista(archProductos,listaProd).then(()=>{
                try{
                    actualizado=listaProd.udpdateProducto(prod)
                    archProductos.guardar(listaProd.getLista())
                }
                catch(err){
                    console.log(err)
                    actualizado=err
                }
                finally{
                    res.json(actualizado)
                }
            })
    //   }
    //    catch(e){
    //    console.log(e)
    //    }   
    }
    else{
        res.json({Error:-1,descripcion:`ruta 'productos' metodo /actualizar no autorizada`});
    }
});

routerProductos.delete('/borrar/:id', (req,res)=>{
    if(admin){
            actualizarLista(archProductos,listaProd).then(()=>{
            let params = req.params;
            let id = params.id;
            let eliminado
            try{
                eliminado=listaProd.getProducto(id)
                listaProd.eliminateProducto(id)
                archProductos.guardar(listaProd.getLista())
            }
            catch(err){
                console.log(err)
                eliminado=err
            }
            res.json({eliminado});
        })
    }
    else{
        res.json({Error:-1,descripcion:`ruta 'productos' metodo /eliminar no autorizada`});
}
});


routerCarrito.get('/listar', (req,res)=>{
    let busq;
    actualizarLista(archCarrito,carrito1.listaProd).then(()=>{
        try{
            busq=carrito1.listaProd.getLista()
        }
        catch(err){
            console.log(err)
            busq=err
        }
        finally{
            res.json(busq)
        }
    })
});

routerCarrito.get('/listar/:id', (req,res)=>{
    let params = req.params;
    let id = params.id;
    let busq;
    actualizarLista(archCarrito,carrito1.listaProd).then(()=>{
        try{
            busq=carrito1.listaProd.getProducto(id)
        }
        catch(err){
            console.log(err)
            busq=err
        }
        finally{
            res.json(busq)
        }
    })
});

routerCarrito.post('/agregar',(req,res)=>{
    if (admin)
    {
            let prod = req.body;
            let incorporado;
            let busq
        try{

            //actualizo el vector de productos
            actualizarLista(archProductos,listaProd).then(()=>{
            //busco el producto
            /*    try{
                    busq=listaProd.getProducto(prod.id)
                }
                catch(err){
                    throw(err)
                }
            */
            }).then(()=>{
            actualizarLista(archCarrito,carrito1.listaProd).then(()=>{
                try{
                    incorporado=carrito1.listaProd.setProducto(prod)
                    archCarrito.guardar(carrito1.listaProd.getLista())
                }
                catch(err){
                    console.log(err)
                    incorporado=err
                }
                finally{
                    res.json(incorporado)
                }
            })
        })
        }
        catch(err)
        {
            console.log(err)
        }
    }
    else{
        res.json({Error:-1,descripcion:`ruta 'Carrito' metodo /agregar no autorizada`});
    }
})

routerCarrito.delete('/borrar/:id', (req,res)=>{
    if(admin){
            actualizarLista(archCarrito,carrito1.listaProd).then(()=>{
            let params = req.params;
            let id = params.id;
            let eliminado
            try{
                eliminado=carrito1.listaProd.getProducto(id)
                carrito1.listaProd.eliminateProducto(id)
                archCarrito.guardar(carrito1.listaProd.getLista())
            }
            catch(err){
                console.log(err)
                eliminado=err
            }
            res.json({eliminado});
        })
    }
    else{
        res.json({Error:-1,descripcion:`ruta 'Carrito' metodo /eliminar no autorizada`});
}
});


 async function actualizarLista(archivo, lista){
    let a = await archivo.leer()
    lista.setLista(archivo.vector)
}