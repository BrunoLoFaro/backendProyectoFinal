import {Router} from "express"

import {
    getCarrito,
    getCarrito_Id,
    postCarrito,
    deleteCarrito,
} from "../controllers/carrito.controller.js"

export const carritoRouter = Router()

carritoRouter
    .get("/listar", getCarrito)
    .get("/listar/:id", getCarrito_Id)
    .post("/agregar/:id", postCarrito)
    .delete("/borrar/:id", deleteCarrito);