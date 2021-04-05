import mongoose from "mongoose";

const ArticuloSchema = mongoose.Schema({
    categoria:{type:mongoose.Schema.Types.ObjectId,ref:'Articulo',required:true},
    codigo:{type:String, required:true,maxlength:64},
    nombre:{type:String,maxlength:50, required:true},
    descripcion:{type:String,maxlength:255},
    precioventa:{type:Number, required:true,default:0},
    stock:{type:Number, default:1, required:true},
    estado:{type:Number, default:1},
    createdAt:{type:Date, default:Date.now}
})

export default mongoose.model('articulo', ArticuloSchema)