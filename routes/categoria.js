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
import {check} from 'express-validator'
import validarCampos from '../Middlewares/validar-campos.js';
import { existeCategoriaById, existeCategoriaByNombre } from '../helpers/db-categoria.js';

const router = Router();

router.get('/', categoriaGet);

router.get('/:id',[
    check('id','No es un Id válido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
], categoriaGetById);

router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeCategoriaByNombre),
    validarCampos
], categoriaPost);

router.put('/:id',[
    check('id','No es un Id válido').isMongoId(),
    check('id').custom(existeCategoriaById),
    check('nombre').custom(existeCategoriaByNombre),
    validarCampos
], categoriaPut);

router.put('/activar/:id',[
    check('id','No es un Id válido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
], categoriaPutActivar);

router.put('/desactivar/:id',[
    check('id','No es un Id válido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
], categoriaPutDesactivar);

router.delete('/:id',[
    check('id','No es un Id válido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
],categoriaDelete);

export default router;