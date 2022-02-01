import mongoose from 'mongoose'
class Carrito{
    constructor(id, timestamp, listaProd){
        this.id=id
        this.timestamp=timestamp
        this.listaProd=listaProd//dejo listaprod para no romper el fs. pending fix
    //cambio el schema para usar populate
    }
}

const carritosCollection = 'carritos'
const carritosSchema = new mongoose.Schema({
    id:{type:Number, require: true},
    timestamp:{type:String, require: true, max:100},
    prod:{ type: mongoose.Schema.Types.ObjectId, ref: 'productos' },
    listaProd:[{ type: mongoose.Schema.Types.ObjectId, ref: 'productos' }]//importar model producto?
})
const Mongo = mongoose.model(carritosCollection, carritosSchema);

let Model = Carrito

const model = {Model, Mongo}

export {model}