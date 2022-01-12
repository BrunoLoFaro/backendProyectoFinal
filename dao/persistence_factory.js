import {fs} from './fsDAO.js';
import {MySQL_local} from './MySQL_local_DAO.js';
import {MySQL_DBaaS} from './MySQL_DBaaS_DAO.js';
import {SQLite3} from './MySQL_SQLite3_DAO.js';
import {MongoDB_local} from './mongo_local_DAO.js';
import {MongoDB_DBaaS} from './mongo_DBaaS_DAO.js';
import {Firebase} from './Firebase_DAO.js';

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

      default:
        {
          console.log('tipo de persistencia desconocido');
        }
    }
  }
}