/////FIX PENDING

import mongoose from 'mongoose'
const carritosCollection = 'carritos'
const carritoschema = new mongoose.Schema({
    id:{type:Number, require: true},
    timestamp:{type:String, require: true, max:100},
    listaProd:{type:String, require: true, max:100},
})

export const carritoModel = mongoose.model(carritosCollection, carritoschema);