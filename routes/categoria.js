import {
    Router
} from 'express'
import {
    categoriaDelete,
    categoriaGet,
    categoriaGetById,
    categoriaPost,
    categoriaPut,
    categoriaPutActivar,
    categoriaPutDesactivar
} from '../controllers/categoria.js';

const router = Router();

router.get('/', categoriaGet);

router.get('/:id', categoriaGetById);

router.post('/', categoriaPost);

router.put('/:id', categoriaPut);

router.put('/activar/:id', categoriaPutActivar);

router.put('/desactivar/:id', categoriaPutDesactivar);

router.delete('/:id',categoriaDelete);

export default router;