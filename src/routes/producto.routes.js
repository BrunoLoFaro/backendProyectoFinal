import {Router} from "express"
import multer from 'multer'
const upload = multer({ dest: "uploads/" });
import {
    getProducto,
    getProducto_Codigo,
    postProducto,
    putProducto,
    deleteProducto,
} from "../controllers/producto.controller.js"

export const productoRouter = Router()

productoRouter
    .get("/", getProducto)
    .get("/:id", getProducto_Codigo)
    .post("/", postProducto)
    .put("/:id", putProducto)
    .delete("/:id", deleteProducto);