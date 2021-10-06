import {Router} from "express"

import {
    getCarrito,
    getCarrito_Codigo,
    postCarrito,
    putCarrito,
    deleteCarrito,
} from "../controllers/carrito.controller.js"

export const carritoRouter = Router()

carritoRouter
    .get("/listar", getCarrito)
    .get("/listar/:codigo", getCarrito)
    .post("/agregar", getCarrito)
    .put("/actualizar", getCarrito)
    .delete("/borrar/:codigo", getCarrito);