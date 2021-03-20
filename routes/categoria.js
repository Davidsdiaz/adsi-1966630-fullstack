import {Router} from 'express'
import {categoriaGet, categoriaGetById, categoriaPost} from '../controllers/categoria.js';

const router = Router();

router.get('/',categoriaGet);

router.get('/:id',categoriaGetById);

router.post('/',categoriaPost);

router.put('/');

router.put('/activar');

router.put('/desactivar');

router.delete('/');

export default router;