import {Persona} from './clase.js'
let usuario = new Persona("Tomás", 33)



function schemaMaker(obj){
    let schema = new Object
    Object.keys(obj).forEach(clave => {
        let type = (typeof obj[clave] === "object")? "string" : typeof obj[clave]
        type = type.charAt(0).toUpperCase() + type.slice(1);
        schema[clave] = {type, require: true}
    });
    return schema
}

console.log(schemaMaker(usuario))

console.log(usuario.constructor.name.toLowerCase() + 's')