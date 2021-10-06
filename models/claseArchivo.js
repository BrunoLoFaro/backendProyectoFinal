import fs from 'fs'

export class Archivo{
    constructor(nombre="gen.txt",vector=[]){
        this.nombre=nombre
        this.vector=[]
    }

    async leer(mostrar=true){
        try{
            let lect = await fs.promises.readFile("data/" +this.nombre,'utf-8')
            this.vector=JSON.parse(lect)//guardo lo leido en el vector de la clase
            return 1
        }
        catch(err){
            throw(err)
        }
    }
    async guardar(obj){
                this.vector=obj;
                await fs.promises.writeFile("data/" +this.nombre,JSON.stringify(this.vector, null, '\t')) 
            }
    async borrar(){
        return await fs.promises.unlink("data/" +this.nombre,(e)=>console.log(e+"e"))
    }
}