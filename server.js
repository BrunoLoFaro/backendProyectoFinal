import express from 'express';
import path from 'path'
import {Archivo} from './claseArchivo.js';
import { ListaProductos,vLoteProductos, listaProd } from './claseProducto.js';
import { ListaCarritos,vLoteCarritos, listaCrts } from './claseCarrito.js';

let archProductos = new Archivo("productos.txt");

const app = express();
const PORT = 8080;//process.env.PORT for GLITCH
const routerProductos = express.Router();
const routerCarritos = express.Router();

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
    //archProductos.guardar(listaProd)
});
server.on('error', error=>console.log('Error en servidor', error));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/productos', routerProductos);
app.use('/carritos', routerCarritos);

routerProductos.get('/listar', (req,res)=>{
    archProductos.leer().then((productos_leidos)=>{

        /*let vProductos
        try{
            vProductos=listaProd.getProductos()
        }
        catch{
            vProductos={}
        }*/
        res.json({productos_leidos})
    })
});

routerProductos.get('/listar/:id', (req,res)=>{
    let params = req.params;
    let id = params.id;
    let busq;
    archProductos.leer().then((productos_leidos)=>{
/*
        try{
            busq= listaProd.getProducto(id)
        }
        catch{
            busq={}
        }
        res.json(busq);*/
    })
});


/* El programa consta de un vector "lista" y un archivo "archivo".
En el vector se carga la totalidad del archivo.
 actualizarArch() hace lo anteriormente mencionado. */

async function actualizarLista(archivo, lista){
        let a = await archivo.leer()
        lista.setLista(archivo.vector)
}


routerProductos.post('/agregar',(req,res)=>{
    let prod = req.body;
    let incorporado;
//    try{
        actualizarLista(archProductos,listaProd).then(()=>{
            try{
                incorporado=listaProd.setProducto(prod)
                archProductos.guardar(listaProd.getLista())
            }
            catch(e){
                console.log(e)
                incorporado={}
            }
            finally{
                res.json(incorporado)
            }
        })
//   }
//    catch(e){
//    console.log(e)
//    }

})

routerProductos.put('/actualizar/:id/:titulo/:precio/:imagen', (req,res)=>{
    let params = req.params;
    let id = params.id;
    let prod ={		
        title: params.titulo,//por query los params vienen como string.
        price: parseInt(params.precio),//tendría efecto si usaramos una bd.
        thumbnail: params.imagen,
        id: id, 
    }
    let actualizado
    try{
        listaProd.updateProducto(prod,id)
        actualizado=listaProd.getProducto(id)
    }
    catch{
        actualizado={}     
    }

    res.json({actualizado});
});

routerProductos.delete('/borrar/:id', (req,res)=>{
    let params = req.params;
    let id = params.id;
    let eliminado
    try{
        listaProd.eliminateProducto(id)
        eliminado=listaProd.getProducto(id)
    }
    catch{
        eliminado={}
    }
    res.json({eliminado});
});
