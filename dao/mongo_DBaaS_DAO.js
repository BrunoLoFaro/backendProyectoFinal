import {persistencia_default} from './persistencia_default.js';
import mongoose from 'mongoose'

export class MongoDB_DBaaS extends persistencia_default{
  constructor () {
    super('MongoDB_DBaaS', Connect, Create, Read, Read_find, Update, Delete)
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
        console.log('Conectado a la base de datos...');
        }
    catch(error) {
        console.log("db not running")
        ///throw `Error: ${error}`;
    }
}
function Create (model, obj){
  try {
    const SaveModel = new model.Mongo(obj)
    SaveModel.save();
    }
  catch(error) {
      throw `Error: ${error}`;
  }
}

async function Read(model){
  let res_data = await  model.Mongo.find({})
    return res_data
}
async function Read_find(model,req_id){
  let res_data = await model.Mongo.find({ id : req_id })
  return res_data
}
async function Update(model,qry, update){
  let res_data = model.Mongo.updateOne(qry, update)
  return res_data
}
async function Delete(model, qry){
  try{
    let res_data = await model.Mongo.deleteOne(qry)
    return res_data
  }
  catch(err){
    console.log(err)
  }
}