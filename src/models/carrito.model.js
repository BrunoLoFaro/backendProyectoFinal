import mongoose from 'mongoose'
class Carrito{
    constructor(timestamp, listaProd){
        this.timestamp=timestamp
        this.listaProd=listaProd//dejo listaprod para no romper el fs. pending fix
    //cambio el schema para usar populate
    }
}

let ItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productos",
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less than 1.']
    },
    total: {
        type: Number,
        required: true,
    }
})

const carritosCollection = 'carritos'
const carritosSchema = new mongoose.Schema({
    listaItems:[ItemSchema],
    total:{type:Number, require: true}
},
{ timestamps: true }
)

carritosSchema.pre('find', function() {
    this.populate('listaItems.product');
  })

const Mongo = mongoose.model(carritosCollection, carritosSchema);

let Model = Carrito

const model = {Model, Mongo}

export {model}