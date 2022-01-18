import mongoose from 'mongoose'
class Carrito{
    constructor(id, timestamp, listaProd){
        this.id=id
        this.timestamp=timestamp
        this.listaProd=listaProd
    }
}

const carritosCollection = 'carritos'
const carritosSchema = new mongoose.Schema({
    id:{type:Number, require: true},
    timestamp:{type:String, require: true, max:100},
    listaProd:{type:String, require: true, max:100},
})
const Mongo = mongoose.model(carritosCollection, carritosSchema);

let Model = Carrito

const model = {Model, Mongo}

export {model}