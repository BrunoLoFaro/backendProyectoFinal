export class persistencia_default {
  constructor(name, Connect,Create, Read, Read_find,Read_qry, Update, Delete) {
    this.name = name;
    this.Connect=Connect;
    this.Create=Create;
    this.Read=Read;
    this.Read_find=Read_find;
    this.Read_qry=Read_qry;
    this.Update=Update;
    this.Delete=Delete;
  }
  showInfo() {
    console.log(`Using ${this.name} as persistence`)
  }
}