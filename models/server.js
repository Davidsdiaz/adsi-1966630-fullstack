import express from 'express'
import cors from 'cors'
import {dbConnection} from '../Database/config.js'
import categoria from '../routes/categoria.js'
import usuario from '../routes/usuario.js'
import articulo from '../routes/articulo.js'
import venta from '../routes/venta.js'
import persona from '../routes/persona.js'
import compra from '../routes/compra.js'
class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        this.conectarBD();

        this.middlewares();

        this.routes();

    }

    async conectarBD() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.use('/api/categoria', categoria)
        this.app.use('/api/usuario', usuario)
        this.app.use('/api/articulo', articulo)
        this.app.use('/api/venta', venta)
        this.app.use('/api/persona', persona)
        this.app.use('/api/compra', compra)


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en el puerto ${this.port}`);
        })
    }

}
export {
    Server
}