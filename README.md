backendProyectoFinal
1era Entrega
El programa usa archivos txt para la persistencia de datos.
Por simpleza, guardo en formato JSON.

A cada archivo del programa le corresponde una instancia de la clase "Archivo", la cual tiene un vector. En este se guardan los objetos leidos.

A su vez, las clases "Carrito" y "ListaProductos" también tienen vectores. 
En estos vectores, copio los vectores de la instancia de Archivo que le corresponda, con la función "actualizarLista()" 