import {app} from "./app.js"
import dotenv from 'dotenv';
dotenv.config({path: './config/.env'})

const PORT = process.env.PORT
const server = app.listen(PORT, ()=>{
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});
server.on('error', error=>console.log('Error en servidor', error));