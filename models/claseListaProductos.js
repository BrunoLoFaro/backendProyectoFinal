export class ListaProductos{
    vLista=[]
    constructor(vProductos){
        this.vLista=vProductos
    }
    getLista(){
        return this.vLista
    }
    getProductoById(id){
        let busq= this.vLista.find(x=>x.id==id)
        if(busq===undefined)
        throw {'Error':"El producto no existe"};
        else
        return busq
    }
    getProductoByCode(codigo){
        let busq= this.vLista.find(x=>x.codigo==codigo)
        if(busq===undefined)
        throw {'Error':"El producto no existe"};
        else
        return busq
    }
    setLista(vec){
        this.vLista=vec;
        return 1
    }
    setProducto(prod){
        let index = this.vLista.find(e=>e.codigo==prod.codigo)
            if(index===undefined)
            {
                if(this.vLista.length===0){
                    prod['codigo']=0
                }
                else{
                    let length = this.vLista.length
                    prod['codigo']=this.vLista[length-1].codigo+1
                }

                this.vLista.push(prod)
            }
            else
            {
                throw new Error({'Error':"El producto ya existe"});
            }
        return prod
    }
    updateProducto(prod){
        try{
            let index = this.vLista.findIndex(x=>x.id==prod.id)
            this.vLista[index]=prod
            return this.vLista[index]
        }
        catch(err){
            throw new Error({'Error':"El producto no existe"});
        }
    }
    eliminateProducto(id){
        try{
            let index = this.vLista.findIndex(x=>x.id==id)
            //shallow copy. El objeto se borra con splice y una referencia no me sirve. 
            var auxEliminado = this.vLista[index];
            this.vLista.splice(index,1)
            if(this.vLista.length>0)
            {
                for(let i=index;i<this.vLista.length;i++)
                this.vLista[i].id--
            }
        }
        catch(err){
            throw new Error({'Error':"El producto no existe"});
        }
        return auxEliminado
    }
}

let vLoteProductos =
[
	{
        id:1,
        timestamp:"",
        nombre:"reloj",
        descripcion:"",
        codigo:"1",
        foto:"https://w7.pngwing.com/pngs/859/290/png-transparent-table-glass-drawing-idea-glass-angle-white-thumbnail.png",
        precio:"434",
        stock:"434",
	},
	{
        id:2,
        timestamp:"",
        nombre:"",
        descripcion:"",
        codigo:"2",
        foto:"https://e7.pngegg.com/pngimages/764/942/png-clipart-alarm-clocks-watch-manecilla-clock-alarm-clocks-watch.png",
        precio:"434",
        stock:"434",
	},
	{
        id:3,
        timestamp:"",
        nombre:"reloj",
        descripcion:"",
        codigo:"3",
        foto:"https://cdn-icons-png.flaticon.com/512/1378/1378481.png",
        precio:"434",
        stock:"434",
	}
]


export {vLoteProductos}