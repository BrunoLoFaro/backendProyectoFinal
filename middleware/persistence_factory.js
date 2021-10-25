import {fs} from './fsDAO.js';
/*const MySQL_local = require('./BMW');
const MySQL_DBaaS = require('./BMW');
const SQLite3 = require('./BMW');
const MongoDB_local = require('./BMW');*/
import {MongoDB_DBaaS} from './mongoDAO.js';
/*const Firebase = require('./BMW');*/

export class persistenceFactory {
  create(type) {
    switch (type) {
      case 0:
        return new fs()

      case 1:
        return new MySQL_local()

      case 2:
        return new MySQL_DBaaS()

      case 3:
        return new SQLite3()

      case 4:
        return new MongoDB_local();

      case 5:
        return new MongoDB_DBaaS();

      case 6:
        return new Firebase();

      case 7:
        console.log('tipo de persistencia desconocido');

      default:
        {
          console.log('tipo de persistencia desconocido');
        }
    }
  }
}