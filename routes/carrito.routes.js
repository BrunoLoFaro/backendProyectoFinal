import {Router} from "express"

import {
    getCarrito,
    getCarrito_Codigo,
    postCarrito,
    deleteCarrito,
} from "../controllers/carrito.controller.js"

export const carritoRouter = Router()

carritoRouter
    .get("/", getCarrito)
    .get("/:id", getCarrito_Codigo)
    .post("/:id", postCarrito)
    .delete("/:id", deleteCarrito);