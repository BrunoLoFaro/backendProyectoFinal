import {persistencia_default} from './persistencia_default.js';
import {vProductos, vMensajes} from './lotes.js'
import {optionsMensajes, optionsProductos} from './options/SQLite3.js';
import knex from 'knex';
let knexMensajes = knex(optionsMensajes)
let knexProductos = knex(optionsProductos)

(async ()=>{
  await knexMensajes.schema.hasTable('mensajes')
  .then(()=>console.log("table mensajes already exists"))
  .catch(()=>{
      knexMensajes.schema.createTable('mensajes', table => {
          table.string('mail'),
          table.string('mensaje'),
          table.string('tiempo'),
          table.increments('id')
          console.log('Tabla de mensajes creada...');
      }).then(()=>{
          knex('mensajes').insert(vMensajes);
          console.log('Mensajes insertados...');
      })      
  })
  await knexProductos.schema.hasTable('productos')
  .then(()=>console.log("table mensajes already exists"))
  .catch(()=>{
      knexMensajes.schema.createTable('productos', table => {
          table.string('title'),
          table.float('price'),
          table.string('thumbnail'),
          table.increments('id')
          console.log('Tabla de productos creada...');
      }).then(()=>{
          knex('productos').insert(vProductos);
          console.log('Mensajes insertados...');
      })      
  })
})();

export class MongoDB_local extends persistencia_default{
  constructor () {
    super('MySQL_local', Connect, Create, Read, Read_find, Update, Delete)
  }
}

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