import {persistencia_default} from './persistencia_default.js';
import mongoose from 'mongoose'

export class MongoDB_local extends persistencia_default{
  constructor () {
    super('MongoDB_local', Connect, Create, Read, Read_find, Update, Delete)
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
async function Create (model, obj){
  try {
    const SaveModel = new model(obj)
    SaveModel.save()
      }
  catch(error) {
      console.log("db not running")
      ///throw `Error: ${error}`;
  }
}

function Read(model){
  return model.find({}).then((found_data)=>console.log(found_data))//ex. productoModel
}
function Read_find(model,id){
  return model.find({ id : 2 }).then((found_data)=>console.log(found_data))//ex. productoModel
}
function Update(model,qry){
  console.log(qry[0],qry[1])
    model.update(qry[0],qry[1])
    .then((e)=>{
      console.log(e)
  })
}
function Delete(model, qry){
  console.log(qry)
  try{
    model.deleteOne(qry)
    .then((e)=>console.log(e))
  }
catch(err){
  console.log(err)
}
}