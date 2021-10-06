import {Router} from "express"

import {
    getCarrito,
    getCarrito_Codigo,
    postCarrito,
    deleteCarrito,
} from "../controllers/carrito.controller.js"

export const carritoRouter = Router()

carritoRouter
    .get("/listar", getCarrito)
    .get("/listar/:codigo", getCarrito_Codigo)
    .post("/agregar/:codigo", postCarrito)
    .delete("/borrar/:codigo", deleteCarrito);