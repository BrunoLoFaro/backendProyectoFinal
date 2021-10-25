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
  model.update(qry[0],qry[1])
    .then((e)=>{
      console.log(e)
  })
}
function Delete(model, qry){
  try{
    model.deleteOne(qry)
    .then((e)=>console.log(e))
  }
  catch(err){
    console.log(err)
  }
}