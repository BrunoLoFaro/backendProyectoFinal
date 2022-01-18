import mongoose from 'mongoose'
export class Usuario{
    constructor(nombre, edad){
        this.id = id
        this.nombre = nombre
        this.direccion = direccion
        this.edad = edad
        this.telefono = telefono
        this.foto = foto
        this.email = email
        this.password = password
    }
  }
const usuariosCollection = 'usuarios'
const usuariosSchema = new mongoose.Schema({
    id:{type:Number, require: true},
    nombre:{type:String, require: true, max:100},
    direccion:{type:String, require: true, max:100},
    edad:{type:Number, require: true, max:100},
    telefono:{type:String, require: true, max:100},
    foto:{type:String, require: true, max:100},
    email:{type:String, require: true, max:100},
    password:{type:String, require: true, max:100},
})

const Mongo = mongoose.model(usuariosCollection, usuariosSchema);

let Model = Producto

const model = {Model, Mongo}

export {model}