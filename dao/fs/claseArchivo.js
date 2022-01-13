export class Archivo{
    constructor(nombre="gen.txt",vector=[]){
        this.nombre=nombre
    }

    async leer(){
        try{
            let lect = await fs.promises.readFile("data/" +this.nombre,'utf-8')
            return lect
        }
        catch(err){
            throw(err)
        }
    }
    async guardar(obj){
        await fs.promises.writeFile("data/" +this.nombre,JSON.stringify(obj, null, '\t')) 
    }
    async borrar(){
        return await fs.promises.unlink("data/" +this.nombre,(e)=>console.log(e+"e"))
    }
}