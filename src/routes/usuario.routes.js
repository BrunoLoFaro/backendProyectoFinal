import {Router} from "express"
import multer from 'multer'
const upload = multer({ dest: "uploads/" });
import {
    getUsuario,
    getUsuario_Codigo,
    postUsuario,
    patchUsuario,
    putUsuario,
    deleteUsuario,
} from "../controllers/usuario.controller.js"

export const usuarioRouter = Router()

usuarioRouter
    .get("/", getUsuario)
    .get("/:id", getUsuario_Codigo)
    .post("/", postUsuario)
    .put("/:id", putUsuario)
    .patch("/avatar/:id", upload.single('avatar'), patchUsuario)
    .delete("/:id", deleteUsuario);