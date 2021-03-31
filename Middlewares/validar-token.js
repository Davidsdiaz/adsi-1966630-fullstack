import jwt from 'jsonwebtoken'
import Usuario from '../models/usuario.js'

const generarJWT=(id)=>{
    return new Promise((resolve,reject)=>{
        const payload = {uid:id}
        console.log(payload);

        jwt.sign(payload, process.env.SECRETPRIVATEKEY, {
            expiresIn:'4h'
        },(err,token)=>{
            if(err){
                reject("no se pudo generar el token")
            }else{
                resolve(token)
            }
        })
    })
}

const validarJWT=async(req,res,next)=>{
    const token=req.header('token')

    if(!token){
        return res.status(401).json(({
            msg:'no hay token en la peticion'
        }))
    }

    try{
        const {uid}= jwt.verify(token,process.env.SECRETPRIVATEKEY)

        const usuario=await Usuario.findById(uid)

        if(!usuario){
            return res.status(401).json(({
                msg:'token no valido'
        }))
    }
        if(usuario.estado===0){
            return res.status(401).json(({
                msg:'token no valido'
        }))
    }

        req.usuario=usuario

        next();

    } 
    catch(error){
        return res.status(401).json(({
            msg:'token no valido'
    }))
    }
    
}

export {generarJWT,validarJWT}