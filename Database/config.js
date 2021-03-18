import mongoose from 'mongoose'

const dbConnection=async()=>{
    try{
        console.log(process.env.MONGOBD_CNX);
        await mongoose.connect(process.env.MONGODB_CNX,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log('base de datos online');

    } catch (error) {
        throw new Error ('error al iniciar la base de datos')
    }

}

export {dbConnection}