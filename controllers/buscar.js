const { response } = require('express');
const { ObjectId } = require('mongoose').Types;

const Afiliado = require('../models/afiliado');

const coleccionesPermitidas = [
    'afiliados'
];

const buscarAfiliados = async( termino = '', res = response ) => {
    const esMongoID = ObjectId.isValid( termino ); //TRUE

    if ( esMongoID ){
        const usuario = await Afiliado.findById(termino);
        return res.json({
            results: ( usuario ) ? [ usuario ] : []
        });
    }

    const usuarios = await Afiliado.find( { NUM_DOC: termino });
    
    res.json({
        results: usuarios
    });
}



const buscar = ( req, res = response ) => {

    const { coleccion, termino } = req.params;

    if (!coleccionesPermitidas.includes( coleccion )){
        return res.status(400).json({
            msg: `Solo se permite la busqueda de: ${ coleccionesPermitidas }`
        })
    }

    switch (coleccion) {
        case 'afiliados':
            buscarAfiliados(termino, res);
            break;
        default: 
            res.status(500).json({
                msg: 'Error de Backend'
            })
            break;
    }
}

module.exports = {
    buscar
}