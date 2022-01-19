import {persistencia_default} from '../persistencia_default.js';
import {Lista} from './claseLista.js'
import { Archivo } from './claseArchivo.js';
import fs from 'fs';

export class local_txt extends persistencia_default{
  constructor (nombre="gen.txt",vector=[]) {
    super('local_txt', Connect, Create, Read, Read_find, Update, Delete)
    this.archivo = new Archivo(nombre)
    this.lista=new Lista(vector)

  }
}

async function readPrevious(inst){
  let res = await inst.archivo.leer()
  inst.lista.vector = JSON.parse(res)
}

async function Connect (){
  //if (fs.existsSync('../../data/gen.txt'))
  if (fs.existsSync('C:/Users/Bruno/Desktop/proyecto_final/data/gen.txt'))
  {
    readPrevious(this)
    return 'reading existing file'
  }
  else
  return 'creating new file'
}

async function Create(model, obj){
  this.archivo.guardar(this.lista.setElemento(obj))
}


async function Read(model){
  let res = await this.archivo.leer()
  return JSON.parse(res)
}

async function Read_find(model,id){
  return this.lista.getElementoByCode(id)
}

async function Update(elem){
  this.archivo.guardar(this.lista.updateElemento(elem))
  return 1
}

async function Delete(model, id){
  this.archivo.guardar(this.lista.eliminateElemento(id))
}