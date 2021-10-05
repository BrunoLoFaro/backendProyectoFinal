import {vLoteProductos, listaProd} from './ClaseProducto'

export class Carrito{
    constructor(id, timestamp, vProductos){
        this.id=id
        this.timestamp=timestamp
        this.vProductos=vProductos
    }
    getCarrito(id){//es el id del producto si existe. Si no hay id listo todos los prod
        let busq= this.vProductos.find(x=>x.id==id)
        if(busq===undefined)
        busq= this.vProductos
        return busq
    }
}

let idFijo = 1
let vLoteCarritos =
[
	{
        id:idFijo,
        timestamp:"",
        vProductos:listaprod,
	}
]

let listaCrts = new ListaCarritos(vLoteCarritos)

export {vLoteCarritos, listaCrts}