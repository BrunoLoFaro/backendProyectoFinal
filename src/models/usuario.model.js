import mongoose from 'mongoose'
export class Usuario{
    constructor(id,password,nombre,apellido,edad,alias,avatar){
        this.password = password
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.alias = alias
        this.avatar = avatar
    }
  }
const usuariosCollection = 'usuarios'
const usuariosSchema = new mongoose.Schema({
    password:{type:String, require: true},
    avatar:{type:String, require: true, max:100},
    nombre:{type:String, require: true, max:100},
    apellido:{type:String, require: true, max:100},
    edad:{type:Number, require: true, max:100},
    alias:{type:String, require: true, max:100},
    rol:{type:String, require: true}
})

const Mongo = mongoose.model(usuariosCollection, usuariosSchema);

let Model = Usuario

const model = {Model, Mongo}

export {model}