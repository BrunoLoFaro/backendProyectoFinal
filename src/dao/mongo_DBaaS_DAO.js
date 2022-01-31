import {persistencia_default} from './persistencia_default.js';
import mongoose from 'mongoose'
import {logger} from '../middleware/logger.config.js'

export class MongoDB_DBaaS extends persistencia_default{
  constructor () {
    super('MongoDB_DBaaS', Connect, Create, Read_all , Read_qry, Update, Delete)
  }
}

async function Connect (){
    try {
        const URI = "mongodb+srv://Bruno:mongoTest.123@cluster0.uinz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        await mongoose.connect(URI, 
            { 
              useNewUrlParser: true,
              useUnifiedTopology: true,
              serverSelectionTimeoutMS: 5000
            })    
            logger.info("Conectado a la base de datos");
        }
    catch(error) {
        logger.warn("Error al conectarse a la base de datos" + error);
        ///throw `Error: ${error}`;
    }
}
function Create (model, obj){
    const SaveModel = new model.Mongo(obj)
    SaveModel.save();
}

async function Read_all(model){
  let res_data = await  model.Mongo.find({})
    return res_data
}

async function Read_qry(model,qry){
  let res_data = await model.Mongo.find(qry)
  return res_data
}
async function Update(model,qry, update){
  let res_data = model.Mongo.updateOne(qry, update)
  return res_data
}
async function Delete(model, qry){
    let res_data = await model.Mongo.deleteOne(qry)
    return res_data
}