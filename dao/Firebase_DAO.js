import {persistencia_default} from '../middleware/persistencia_default.js';
import admin from 'firebase-admin';
import serviceAccount from './db/prueba-2eae1-firebase-adminsdk-hjmq9-c5747ae8fb.json';

export class Firebase extends persistencia_default{
  constructor () {
    super('Firebase_local', Connect, Create, Read, Read_find, Update, Delete)
  }
}

const db = admin.firestore();
const query = db.collection('productos');

async function Connect (){

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://prueba-2eae1-firebaseio.com"
  });
  
  console.log('Base de datos conectada!');
}

async function Create (id, obj){
    let doc = query.doc(`${id}`);
    await doc.create(obj);
}

function Read(){
  try {
    console.log('Seleccionando todos los documentos...');
    const querySnapshot = await query.get();
    let docs = querySnapshot.docs;        
    const response = docs.map(doc=>({
      id:doc.id,
      timestamp:doc.data().timestamp,
      nombre:doc.data().nombre,
      descripcion:doc.data().descripcion,
      codigo:doc.data().codigo,
      foto:doc.data().foto,
      precio:doc.data().foto,
      stock:doc.data().foto
    }));
    console.log(response);
} catch(error){
    console.log('Error!', error);
}
}

function Read_find(id){
  try{
    const doc = query.doc(`${id}`);  
    const item = await doc.update(attr)
    const response = item.data()
    .then(() => {
        console.log(`Fila ${item} traida!`);
    })
  }
  catch(err){
    console.log(err)
  } 
}
function Update(attr){//formato de la query?
  try{
    const doc = query.doc(`${id}`);  
    const item = await doc.update(attr)
    .then(() => {
        console.log(`Fila ${item} actualizado!`);
    })
  }
  catch(err){
    console.log(err)
  }
}

function Delete(id){
  try{
    const doc = query.doc(`${id}`);  
    const item = await doc.delete()
    .then(() => {
        console.log(`Fila ${item} borrada!`);
    })
  }
  catch(err){
    console.log(err)
  }
}