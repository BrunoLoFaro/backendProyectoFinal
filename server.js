import {app} from "./app.js"

const PORT = process.env.PORT

const server = app.listen(PORT, ()=>{
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});
server.on('error', error=>console.log('Error en servidor', error));