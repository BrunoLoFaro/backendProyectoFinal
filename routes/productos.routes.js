import {Router} from "express"

import {
    getProducto,
    getProducto_Codigo,
    postProducto,
    putProducto,
    deleteProducto,
} from "../controllers/producto.controller.js"

export const productosRouter = Router()

productosRouter
    .get("/", getProducto)
    .get("/:id", getProducto_Codigo)
    .post("/", postProducto)
    .put("/:id", putProducto)
    .delete("/:id", deleteProducto);