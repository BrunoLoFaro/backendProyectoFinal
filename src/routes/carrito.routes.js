import {Router} from "express"

import {
    getCarrito,
    getCarrito_Codigo,
    postCarrito,
    patchCarrito,
    putCarrito,
    deleteCarrito,
} from "../controllers/carrito.controller.js"

export const carritoRouter = Router()

carritoRouter
    .get("/", getCarrito)
    .get("/:id", getCarrito_Codigo)
    .post("/", postCarrito)
    .patch("/:id", patchCarrito)
    .put("/:id", putCarrito)
    .delete("/:id", deleteCarrito);