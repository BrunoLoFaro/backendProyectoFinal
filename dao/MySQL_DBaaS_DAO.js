import {persistencia_default} from './persistencia_default.js';
import knex from 'knex';


export class MySQL_local extends persistencia_default{
  constructor () {
    super('MySQL_local', Connect, Create, Read, Read_find, Update, Delete)
  }
}

const options = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  searchPath: 'knex,public',
  pool: { min: 0, max: 7 }
}

let knex_

async function Connect (){
    try {
      knex_ = knex(options)
        }
    catch(error) {
        console.log(error)
    }
}

async function Create (model, obj){
  try {
    let res = await knex_.from(modelName(model)).insert(obj)
    return res
      }
  catch(error) {
      console.log("db not running")
      ///throw `Error: ${error}`;
  }
}

async function Read(model){
  let grp = modelName(model)
  try {
  let res = await knex_.select("*")
      .from(grp)
  return res
  }
  catch(error) {
    console.log("db not running")
    ///throw `Error: ${error}`;
  }
}
async function Read_find(model,id){
  let grp = modelName(model)
  try{
  let res = await knex_.from(grp).select('*').where('id', '=', id)
    return res
  }
  catch(error) {
    console.log("db not running")
    ///throw `Error: ${error}`;
  }
}
async function Update(model,qry, update){
  let grp = modelName(model)
  try{
    let res = await knex_.from(grp).where(qry).update(update)
    return res
  }
  catch(error) {
    console.log("db not running")
    ///throw `Error: ${error}`;
  }
}

async function Delete(model, qry){
  let grp = modelName(model)
  try {
    let res = await knex_("productos")
    .del()
    .where(qry)
    return res
  }
  catch(error) {
    console.log("db not running")
    ///throw `Error: ${error}`;
  }
}

let modelName = (a)=>{
return a.Model.name.toLowerCase() + 's'
}