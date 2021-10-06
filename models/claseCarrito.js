import { ListaProductos } from "./claseListaProductos.js"

export class Carrito{
    constructor(id=1, timestamp="", vProductos=[]){
        this.id=id
        this.timestamp=timestamp
        this.listaProd=new ListaProductos(vProductos)
    }
    getCarrito(id){//es el id del producto si existe. Si no hay id listo todos los prod
        let busq= this.listaProd.vLista.find(x=>x.id==id)
        if(busq===undefined)
            busq= this.listaProd
        return busq
    }
}