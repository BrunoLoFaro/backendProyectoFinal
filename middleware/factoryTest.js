import {persistenceFactory} from './persistence_factory.js'

const f = new persistenceFactory();
const mongo = f.create(5)

console.log(mongo)
mongo.showInfo()
mongo.Connect()