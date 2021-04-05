import Router from 'express'
import validator from 'express-validator';
const {check}=validator
import { personaDelete, personaGet, personaGetById, personaGetListClientes,personaGetListProveedores, personaPost, personaPut, personaPutActivar, personaPutDesactivar } from "../controllers/persona.js";
import { ExistePersonaById, ExistePersonaByNombre, ExistePersonaByEmail } from "../helpers/persona.js";
import { validarJWT } from '../Middlewares/validar-token.js';
import { validarRol } from '../Middlewares/validar-rol.js';
import validarCampos from '../Middlewares/validar-campos.js';

const router = Router();

router.get('/', [

    validarJWT,
    validarRol ('ALMACENISTA_ROL'),
    validarCampos

], personaGet)

router.get('/listclientes',[
    validarJWT,
    validarCampos   
],personaGetListClientes)

router.get('/listproveedores',[
    validarJWT,
    validarCampos,
], personaGetListProveedores)


router.get('/:id',[
    validarJWT,
    validarCampos
],personaGetById)



router.post('/',[    
    validarJWT,
    validarRol('ALMACENISTA_ROL','VENDEDOR_ROL'), 
    check('nombre', 'El nombre es obligatorio!').not().isEmpty(),
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom(ExistePersonaByEmail),
    validarCampos     
],    personaPost);

router.put('/:id', [
    validarJWT,
    check('id','no es un ID valido').isMongoId(),
    check('id').custom (ExistePersonaById), 
    check('nombre').custom(ExistePersonaByNombre),
    validarCampos
],personaPut)

router.put('/activar/:id', [
    validarJWT,
    check('id','no es un ID valido').isMongoId(),
    check('id').custom (ExistePersonaById), 
    check('nombre').custom(ExistePersonaByNombre),
    validarCampos
],personaPutActivar)

router.put('/desactivar/:id', [
    validarJWT,
    check('id','no es un ID valido').isMongoId(),
    check('id').custom (ExistePersonaById), 
    check('nombre').custom(ExistePersonaByNombre),
    validarCampos
],personaPutDesactivar)

router.delete('/:id', [
    validarJWT,
    check('id','no es un ID valido').isMongoId(),
    check('id').custom (ExistePersonaById), 
    check('nombre').custom(ExistePersonaByNombre),
    validarCampos
],personaDelete);

export default router;