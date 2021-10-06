import {app} from "./app.js"

const PORT = 8080

const server = app.listen(PORT, ()=>{
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});
server.on('error', error=>console.log('Error en servidor', error));