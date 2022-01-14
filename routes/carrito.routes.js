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
    .get("/", getCarrito)
    .get("/:id", getCarrito_Codigo)
    .post("/", postCarrito)
    .put("/:id", putCarrito)
    .delete("/:id", deleteCarrito);