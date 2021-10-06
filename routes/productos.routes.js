import {Router} from "express"

import {
    getProducto,
    getProducto_Codigo,
    postProducto,
    putProducto,
    deleteProducto,
} from "../controllers/productos.controller.js"

export const productosRouter = Router()

productosRouter
    .get("/listar", getProductos)
    .get("/listar/:codigo", getProductos)
    .post("/agregar", getProductos)
    .put("/actualizar", getProductos)
    .delete("/borrar/:codigo", getProductos);