const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            buscar:     '/api/buscar',
            usuarios:   '/api/usuarios',
            consultas:  '/api/consultas'
        }
        
        // Conectar a la base de datos

        this.conectarDB();

        // Middlewares
        this.middlewares();
        
        // Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        // Lectura y parseo del body

        this.app.use( express.json() );

        // Directorio publico
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.paths.buscar, require('../routes/buscar'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));
        this.app.use(this.paths.consultas, require('../routes/consultas'));
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port );
        });
    }
}

module.exports = Server;