const { Schema, model } = require( 'mongoose' );

const AfiliadoSchema = Schema({
    ID: {
        type: String,
        required: [true, 'El ID es obligatorio']
    },
    NOM_EPS_CONTRATO: {
        type: String,
        required: [true, 'El nombre de EPS es obligatorio'],
    },
    TIP_DOC: {
        type: String,
        required: [true, 'El tipo de documento es obligatorio']
    },
    NUM_DOC: {
        type: String,
        required: [true, 'El numero de documento es obligatorio']
    },
    PRI_APE: {
        type: String,
        required: [true, 'El primer apellido es obligatorio']
    },
    SEG_APE: {
        type: String
    },
    PRI_NOM: {
        type: String,
        required: [true, 'El primer nombre es obligatorio']
    },
    SEG_NOM: {
        type: String
    },
    FEC_NAC: {
        type: Date
    },
    GEN: {
        type: String
    },
    FEC_REC: {
        type: Date
    }
});

module.exports = model( 'Afiliado', AfiliadoSchema );