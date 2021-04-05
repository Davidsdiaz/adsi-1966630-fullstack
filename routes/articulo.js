import {Router} from 'express'
import { articuloDelete, articuloGet, articuloGetById, articuloPost, articuloPut, articuloPutActivar, articuloPutDesactivar } from '../controllers/articulo.js';
import { existearticuloById, existearticuloByNombre } from '../helpers/articulo.js';
import { validarJWT } from '../Middlewares/validar-token.js';
import { validarRol } from '../Middlewares/validar-rol.js';
import validarCampos from '../Middlewares/validar-campos.js';
import {check} from 'express-validator'

const router = Router();

router.get('/',[
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    validarCampos
],articuloGet)

router.get('/:id',[
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id','No es un Id válido').isMongoId(),
    check('id').custom(existearticuloById),
    validarCampos
],articuloGetById)

router.post('/',[
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existearticuloByNombre),
    validarCampos
],articuloPost)

router.put('/:id',[
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id','No es un Id válido').isMongoId(),
    check('id').custom(existearticuloById),
    check('nombre').custom(existearticuloByNombre),
    validarCampos
],articuloPut)

router.put('/activar/:id',[
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id','No es un Id válido').isMongoId(),
    check('id').custom(existearticuloById),
    validarCampos
],articuloPutActivar)

router.put('/desactivar/:id',[
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id','No es un Id válido').isMongoId(),
    check('id').custom(existearticuloById),
    validarCampos
],articuloPutDesactivar)

router.delete('/:id',[
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id','No es un Id válido').isMongoId(),
    check('id').custom(existearticuloById),
    validarCampos
],articuloDelete)


export default router;