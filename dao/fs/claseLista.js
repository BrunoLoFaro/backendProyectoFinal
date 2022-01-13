export class Lista{
    vector=[]
    constructor(vector){
        this.vector=vector
    }
    getLista(){
        return this.vector
    }
    getElementoByCode(codigo){
        let busq= this.vector.find(x=>x.codigo==codigo)
        if(busq===undefined)
        throw {'Error':"El Elemento no existe"};
        else
        return busq
    }
    setLista(vec){
        this.vector=vec;
        return this.vector
    }
    setElemento(elem){
        let index = this.vector.find(e=>e.codigo==elem.codigo)
            if(index===undefined)
            {
                if(this.vector.length===0){
                    elem['codigo']=0
                }
                else{
                    let length = this.vector.length
                    elem['codigo']=this.vector[length-1].codigo+1
                }

                this.vector.push(elem)
            }
            else
            {
                throw new Error({'Error':"El Elemento ya existe"});
            }
        return this.vector
    }
    updateElemento(elem){
        try{
            let index = this.vector.findIndex(x=>x.id==elem.id)
            this.vector[index]=elem
            return this.vector
        }
        catch(err){
            throw new Error({'Error':"El Elemento no existe"});
        }
    }
    eliminateElemento(id){
        try{
            let index = this.vector.findIndex(x=>x.id==id)
            //shallow copy. El objeto se borra con splice y una referencia no me sirve. 
            var auxEliminado = this.vector[index];
            this.vector.splice(index,1)
            if(this.vector.length>0)
            {
                for(let i=index;i<this.vector.length;i++)
                this.vector[i].id--
            }
        }
        catch(err){
            throw new Error({'Error':"El Elemento no existe"});
        }
        return this.vector
    }
}

export {vLoteElemento}