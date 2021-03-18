import express from 'express'
import cors from 'cors'
import { dbConnection } from '../Database/config.js'

class Server{
    constructor(){
       this.app= express()
       this.port = process.env.PORT

       this.conectarBD();

       this.middlewares();

        this.routes();
        
    }

     async conectarBD(){
       await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));

    }

    routes(){

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`servidor corriendo en el puerto ${this.port}`);
        })
    }
   
}
export {Server}



