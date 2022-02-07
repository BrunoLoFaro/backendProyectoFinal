import {app} from "./app.js"
import dotenv from 'dotenv';
import cluster from 'cluster';
import { cpus } from 'os';
dotenv.config({path: './src/config/.env'})
import {logger} from './middleware/logger.config.js'
const PORT = process.env.PORT
const numCPUs = cpus().length;

if (cluster.isPrimary && process.env.MULTITHREADING=='true') {
    logger.info(`Primary ${process.pid} is running`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        logger.warn(`worker ${worker.process.pid} died`);
    });
} 

else {
    const server = app.listen(PORT, ()=>{
    logger.info(`Servidor HTTP escuchando en el puerto ${PORT}`);
    });
    server.on('error', error=>logger.warn('Error en servidor', error));
}