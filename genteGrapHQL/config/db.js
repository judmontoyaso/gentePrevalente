const mongoose = require ('mongoose');
require('dotenv').config({path : 'variables.env'});

const conectarDB = async () =>{
    try {
        await mongoose.connect(process.env.DB_MONGO, {

            useNewUrlParser: true,
            useUnifiedTopology: true,
           



        });
        console.log('DB conectada')
    } catch (error) {
        console.log("No se pudo conectar a la base d datos")
        console.log(error);
        process.exit(1); //Detener la aplicación
        
    }
}

module.exports = conectarDB;