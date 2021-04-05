import articulo from '../models/articulo.js'

const articuloPost = async(req,res)=>{
    const {categoria, codigo, nombre, descripcion, precioventa, stock}=req.body
    const Articulo = articulo({categoria, codigo, nombre, descripcion, precioventa, stock})
    
    Articulo.save();

    res.json ({
        Articulo
    })
}

const articuloGet = async (req, res) => {
    const { value } = req.query;
    const Articulo = await articulo.find({
            $or: [
                { nombre: new RegExp(value, 'i') },
                { descripcion: new RegExp(value, 'i') }
            ]
        })
        .sort({ "createdAt": -1 })
    res.json({
        Articulo
    })
}

const articuloGetById= async(req,res)=>{
    const {id}=req.params

    const Articulo = await articulo.findById(id)

    res.json({
        Articulo
    })
}

const articuloPut=async(req,res)=>{
    const {id}=req.params;

    const {_id,createdAt,estado,__v,...resto}=req.body;

    const Articulo= await articulo.findByIdAndUpdate(id,resto)

    res.json({
        Articulo
    })
   


}

const articuloPutActivar= async(req,res)=>{
    const {id}=req.params

    const Articulo = await articulo.findByIdAndUpdate(id,{estado:1})

    res.json({
        Articulo
    })
}

const articuloPutDesactivar= async(req,res)=>{
    const {id}=req.params

    const Articulo = await articulo.findByIdAndUpdate(id,{estado:0})

    res.json({
        Articulo
    })
}


const articuloDelete= async(req,res)=>{
    const {id}=req.params

    const Articulo = await articulo.findByIdAndDelete(id)

    res.json({
        Articulo
    })
}


export {articuloPost,articuloGet,articuloGetById,articuloPut, articuloPutActivar, articuloPutDesactivar,articuloDelete}