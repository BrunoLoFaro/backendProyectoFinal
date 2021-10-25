import {persistencia_default} from './persistencia_default.js';
//import * as productoModel from './models/producto.model.js'
//import * as mensajeModel from './models/carrito.model.js'
import mongoose from 'mongoose'

export class MongoDB_DBaaS extends persistencia_default{
  constructor () {
    super('Fs', Connect, Create, Read, Update, Delete)
  }
}

async function Connect (){
    try {
        const URI = 'mongodb://localhost:27017/ecommerce';
        await mongoose.connect(URI, 
            { 
              useNewUrlParser: true,
              useUnifiedTopology: true,
              serverSelectionTimeoutMS: 1000
            })    
        console.log('Conectado a la base de datos...');
        }
    catch(error) {
        console.log("db not running")
        ///throw `Error: ${error}`;
    }
}
async function Create (){
  try {
      const URI = 'mongodb://localhost:27017/ecommerce';
      await mongoose.connect(URI, 
          { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 1000
          })    
      console.log('Conectado a la base de datos...');
      }
  catch(error) {
      console.log("db not running")
      ///throw `Error: ${error}`;
  }
}

function Read(model){
  return model.mensajes.find({}).then((found_data))//ex. productoModel
}
function Update(model, coll){
  const SaveModel = new model.productos(coll)
  SaveModel.save()
}
function Delete(model, coll, qry){
  model.coll.deleteMany(qry)
}