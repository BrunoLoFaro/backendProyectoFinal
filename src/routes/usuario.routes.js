import {Router} from "express"

import {
    getUsuario,
    getUsuario_Codigo,
    postUsuario,
    putUsuario,
    deleteUsuario,
} from "../controllers/usuario.controller.js"

export const usuarioRouter = Router()

usuarioRouter
    .get("/", getUsuario)
    .get("/:id", getUsuario_Codigo)
    .post("/", postUsuario)
    .put("/:id", putUsuario)
    .delete("/:id", deleteUsuario);