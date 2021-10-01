import express from 'express';
import path from 'path'
import {Archivo} from './claseArchivo.js';
import { ListaProductos,vLoteProductos, listaProd } from './claseProducto.js';
import { ListaCarritos,vLoteCarritos, listaCrts } from './claseCarrito.js';

let archProductos = new Archivo("productos.txt");

const app = express();
const PORT = 8080;//process.env.PORT for GLITCH
const router = express.Router();

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
    //archProductos.guardar(listaProd)
});
server.on('error', error=>console.log('Error en servidor', error));

app.use(express.urlencoded({extended: false}));
app.use('/api', router);

app.get('/productos/listar', (req,res)=>{
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

app.get('/productos/listar/:id', (req,res)=>{
    let params = req.params;
    let id = params.id;
    let busq;
    archProductos.leer().then((productos_leidos)=>{
        try{
            busq= listaProd.getProducto(id)
        }
        catch{
            busq={}
        }
        res.json(busq);
    })
});


app.post('/productos/agregar/',(req,res)=>{
    let prod = req.body;
    let incorporado;
    archProductos.leer().then((productos_leidos)=>{
        try{
            incorporado=listaProd.setProducto(prod)
        }
        catch{
            incorporado={}//respuesta de error?
        }
        res.json(incorporado);   
    })
    archProductos.guardar()
})

app.put('/productos/actualizar/:id/:titulo/:precio/:imagen', (req,res)=>{
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

app.delete('/productos/borrar/:id', (req,res)=>{
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
