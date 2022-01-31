import {app} from "./app.js"
import dotenv from 'dotenv';
dotenv.config({path: './src/config/.env'})
import {logger} from './middleware/logger.config.js'

const PORT = process.env.PORT
console.log(PORT)
const server = app.listen(PORT, ()=>{
    
    logger.info(`Servidor HTTP escuchando en el puerto ${PORT}`);
});
server.on('error', error=>logger.warn('Error en servidor', error));