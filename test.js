class Clase{
    vec=[]
    constructor(a)
    {
        this.vec=a
    }
    imprimir(){
        console.log(typeof(this.vec))
        console.log(this.vec)
        console.log(Clase)
    }
}
let inst = new Clase([1,2,3])
console.log(typeof(inst.vec))
console.log(inst.vec)
console.log(Clase)

inst.imprimir()