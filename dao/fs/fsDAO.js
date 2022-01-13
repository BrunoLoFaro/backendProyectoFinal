import {persistencia_default} from '../persistencia_default.js';
import Lista from 'claseLista.js'
import { Archivo } from './claseArchivo.js';

export class fs extends persistencia_default{
  constructor (nombre="gen.txt",vector=[]) {
    super('fs', Connect, Create, Read, Read_find, Update, Delete)
    this.archivo = new Archivo(nombre,vector)
    this.lista=new Lista(vector)
  }
}

async function Connect (){
return 1
}

async function Create(elem){
  this.archivo.guardar(this.lista.setLista(elem))
}


async function Read(){
  return this.archivo.leer()
}

async function Read_find(id){
  return this.lista.getElementoByCode(id)
}

async function Update(elem){
  this.archivo.guardar(this.lista.updateElemento(elem))
  return 1
}

async function Connect(){
//check if the file exists
  return 1
}

async function Delete(elem){
  this.archivo.guardar(this.lista.eliminateElemento(elem))
}