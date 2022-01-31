import {logger} from '../middleware/logger.config.js'
export class persistencia_default {
  constructor(name, Connect,Create, Read_all, Read_qry, Update, Delete) {
    this.name = name;
    this.Connect=Connect;
    this.Create=Create;
    this.Read_all=Read_all;
    this.Read_qry=Read_qry;
    this.Update=Update;
    this.Delete=Delete;
  }
  showInfo() {
    logger.info(`Using ${this.name} as persistence`)
  }
}