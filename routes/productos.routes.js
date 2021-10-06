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
    .get("/listar", getProducto)
    .get("/listar/:codigo", getProducto_Codigo)
    .post("/agregar", postProducto)
    .put("/actualizar", putProducto)
    .delete("/borrar/:codigo", deleteProducto);