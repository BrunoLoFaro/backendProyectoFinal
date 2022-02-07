import {Router} from "express"

import {
    getCarrito,
    getCarrito_Codigo,
    postCarrito,
    postAddProd,
    patchCarrito,
    putCarrito,
    deleteCarrito,
} from "../controllers/carrito.controller.js"

export const carritoRouter = Router()

carritoRouter
    .get("/", getCarrito)
    .get("/:id", getCarrito_Codigo)
    .post("/", postCarrito)//agregar carrito completo
    .post("/item/", postAddProd)//agregar un producto al carrito
    .patch("/:id", patchCarrito)
    .put("/:id", putCarrito)
    .delete("/:id", deleteCarrito);