import {persistenceFactory} from './persistence_factory.js'
const f = new persistenceFactory();
export const persistence = f.create(5)//elijo el tipo de persistencia

/*

Persistence Options

1 - MySQL_local
2 - MySQL_DBaaS
3 - SQLite3
4 - MongoDB_local
5 - MongoDB_DBaaS
6 - Firebase

*/