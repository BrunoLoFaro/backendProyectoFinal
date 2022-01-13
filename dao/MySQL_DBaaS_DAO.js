import {persistencia_default} from './persistencia_default.js';
import knex from 'knex';

//fix pending

export class MySQL_DBaaS extends persistencia_default{
  constructor () {
    super('MySQL_local', Connect, Create, Read, Read_find, Update, Delete)
  }
}

const optionsMensajes = {
  client: 'sqlite3',
  connection: {
      filename: './DB/mydb.sqlite'
  },
  useNullAsDefault: true
}
const optionsProductos = {
  client: 'mysql',
  connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '',
      database: 'productos'
  },
  useNullAsDefault: true
}

let knexMensajes = knex(optionsMensajes)
let knexProductos = knex(optionsProductos)

async function Connect (){
    try {
      knexMensajes = knex(optionsMensajes)
      knexProductos = knex(optionsProductos)
        }
    catch(error) {
        console.log("db not running")
    }
}
async function Create (model, obj){
  try {
    knexProductos('models').insert(obj)
      }
  catch(error) {
      console.log("db not running")
      ///throw `Error: ${error}`;
  }
}

function Read(model){
  knexProductos.from(model).select('*').then((productos_guardados)=>{
    return productos_guardados
})
}
function Read_find(model,id){
  knexProductos.from(model).select('*').where('id', '=', id).then((productos_guardados)=>{
    return productos_guardados
})
}
function Update(model,qry){//formato de la query?
  knexProductos.from(model).where('id', '=', id).update({price: 4700}).then((productos_guardados)=>{
})
  .then((e)=>{
  console.log(e)
  return productos_guardados
  })
}
function Delete(model, qry){
  try{
    knex.from('cars').where('price', '>', 4500).del()
    .then(() => {
        console.log('Filas borradas!');
    })
  }
  catch(err){
    console.log(err)
  }
}