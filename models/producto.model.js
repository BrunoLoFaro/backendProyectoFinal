import mongoose from 'mongoose'
const productosCollection = 'productos'
class Producto{
    constructor(id, timestamp, nombre,descripcion, codigo, foto, precio, stock){
        this.id=id
        this.timestamp=timestamp
        this.nombre=nombre
        this.descripcion=descripcion
        this.codigo=codigo
        this.foto=foto
        this.precio=precio
        this.stock=stock
    }
}
let producto = new Producto(1,1,"a","a","a","a",1,1)

export {producto}