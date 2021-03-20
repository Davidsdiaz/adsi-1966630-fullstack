import Categoria from '../models/categoria.js'

const categoriaGet=async (req,res)=>{
    const {value}= req.query;
    const categoria= await Categoria
    .find({
        $or:[
            {nombre:new RegExp(value,'i')},
            {descripcion:new RegExp (value, 'i')}
        ]
    })
    .sort({"createdAt":-1 })

    res.json({
        categoria
    })
}

const categoriaGetById=async (req,res)=>{
    
    const {id}= req.params;

    const categoria= await Categoria.findOne({_id:id})

    res.json({
        categoria
    })
}

const categoriaPost=async (req,res)=>{
    const {nombre,descripcion}=req.body;

    const categoria = new Categoria({nombre, descripcion})

   await categoria.save();

    res.json({
        categoria
    })
}

export {categoriaPost, categoriaGet, categoriaGetById}