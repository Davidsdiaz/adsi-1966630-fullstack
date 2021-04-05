import Router from 'express'
import validator from 'express-validator';
const { check } = validator
import {ventaGet, ventaGetByID, ventaPost, ventaPut, ventaPutActivar, ventaPutDesactivar } from '../controllers/venta.js';
import { ExisteByNumcomprobante, ExisteVentaById } from '../helpers/venta.js';
import validarCampos from "../Middlewares/validar-campos.js";
import { validarRol } from "../Middlewares/validar-rol.js";
import { validarJWT } from "../Middlewares/validar-token.js";


const router = Router();

router.get('/', [

    validarJWT,
    validarRol('VENDEDOR_ROL,ADMIN_ROL'),
    validarCampos

], ventaGet)

router.get('/:id', [
    validarJWT,
    check('id', 'no es un ID valido').isMongoId(),
    check('id').custom(ExisteVentaById),
    validarCampos
], ventaGetByID)

router.post('/', [
    validarJWT,
    check('numerocomprobante', 'El numero de comprabante debe ser valido').not().isEmpty(),
    check('numerocomprobante').custom(ExisteByNumcomprobante),
    validarCampos
], ventaPost)


router.put('/:id', [
    validarJWT,
    check('id', 'no es un ID valido').isMongoId(),
    check('id').custom(ExisteVentaById),
    check('numerocomprobante').custom(ExisteByNumcomprobante),
    validarCampos
], ventaPut)

router.put('/activar/:id', [
    validarJWT,
    check('id', 'no es un ID valido').isMongoId(),
    check('id').custom(ExisteVentaById),
    check('numerocomprobante').custom(ExisteByNumcomprobante),
    validarCampos
], ventaPutActivar)

router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'no es un ID valido').isMongoId(),
    check('id').custom(ExisteVentaById),
    check('numerocomprobante').custom(ExisteByNumcomprobante),
    validarCampos
], ventaPutDesactivar)



export default router;