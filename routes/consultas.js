const { Router } = require('express');

const { consultasGet, 
        consultasPut, 
        consultasPost, 
        consultasPatch, 
        consultasDelete } = require('../controllers/consultas');

const router = Router();

  router.get('/', consultasGet);
 
  router.put('/:id', consultasPut );
  
  router.post('/', consultasPost );
  
  router.patch('/', consultasPatch );

  router.delete('/', consultasDelete );
  
module.exports = router;