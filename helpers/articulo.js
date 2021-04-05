import articulo from "../models/articulo.js"

const existearticuloById=async(id)=>{
    const existe =await articulo.findById(id);

    if(!existe){
        throw new Error(`El Id no existe ${id}`)
    }
}

const existearticuloByNombre=async(nombre)=>{
    const existe = await articulo.findOne({nombre});
    if(existe) throw new Error (`ya existe articulo con ese nombre ${nombre}`);
}

export {existearticuloById,existearticuloByNombre}