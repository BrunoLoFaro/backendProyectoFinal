import {Router} from "express"
import {upload} from '../middleware/multer.config.js'
import {
    getUsuario,
    getUsuario_Codigo,
    patchUsuario,
    updateAvatar,
    putUsuario,
    deleteUsuario,
} from "../controllers/usuario.controller.js"

export const usuarioRouter = Router()

usuarioRouter
    .get("/", getUsuario)
    .get("/:id", getUsuario_Codigo)
    .put("/:id", putUsuario)
    .patch("/avatar/:id", updateAvatar, upload.single('avatar'))
    .delete("/:id", deleteUsuario);