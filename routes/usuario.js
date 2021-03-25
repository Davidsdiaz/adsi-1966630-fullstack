import {Router} from 'express'
import { usuarioGet, usuarioGetById,usuarioDelete, usuarioPost, usuarioPut, usuarioPutActivar, usuarioPutDesactivar } from '../controllers/usuario.js';

const router = Router();

router.get('/',usuarioGet)

router.get('/:id',usuarioGetById)

router.post('/',usuarioPost)

router.put('/:id',usuarioPut)

router.put('/activar/:id',usuarioPutActivar)

router.put('/desactivar/:id',usuarioPutDesactivar)

router.delete('/:id',usuarioDelete)

export default router