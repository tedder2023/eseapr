const { response, request } = require('express');

const Afiliado = require('../models/afiliado');

const consultasGet = async(req= request, res = response) => {
   
  const afiliados = await Afiliado.find()
    .limit(1);

    res.json({
        afiliados
    });
  }

 const consultasPut = (req, res = response) => {
    const { id } = req.params;

    res.status(400).json({
        msg: 'put API - Controlador',
        id
    });
  }

  const consultasPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    
    res.status(201).json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
  }

 const consultasPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controlador'
    });
  }

  const consultasDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
  }

  module.exports = {
      consultasGet,
      consultasPut,
      consultasPost,
      consultasPatch,
      consultasDelete
  }