import {persistenceFactory} from './persistence_factory.js'
const f = new persistenceFactory();
const persistence = f.create(0)//elijo el tipo de persistencia
//conecto e imprimo su nombre
persistence.Connect()
.then((e)=>{
    console.log(e)
    persistence.showInfo()
})
//exporto la persistencia para que la usen los controllers
export {persistence}
/*

Persistence Options

0 - local_txt
1 - MySQL_local
2 - MySQL_DBaaS
3 - MySQL_SQLite3
4 - MongoDB_local
5 - MongoDB_DBaaS
6 - Firebase

*/