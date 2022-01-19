import {persistenceFactory} from './persistence_factory.js'
import dotenv from 'dotenv';
dotenv.config({path: './config/.env'})

const f = new persistenceFactory();
const opt = parseInt(process.env.PERSISTENCE)

const persistence = f.create(opt)//elijo el tipo de persistencia

//conecto e imprimo su nombre
persistence.Connect()
.then((e)=>{
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