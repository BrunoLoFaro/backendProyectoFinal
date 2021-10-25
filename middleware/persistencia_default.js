export class persistencia_default {
  constructor(name, Connect,Create, Read, Update, Delete) {
    this.name = name;
    this.Connect=Connect;
    this.Create=Create;
    this.Read=Read;
    this.Update=Update;
    this.Delete=Delete;
  }
  showInfo() {
    console.log(`Using ${this.name} as persistance`)
  }/*
  Connect(){

  }
  Create(){

  }
  Read(){

  }
  Update(){

  }
  Delete(){

  }*/
}