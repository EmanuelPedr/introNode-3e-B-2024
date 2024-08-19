const express = require('express'); 
const router = express.Router(); 
const cors = require('cors');
const router = require('./router/routes')

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 

// definição das rotas
router.get('/usuarios', UsuariosController.listarUsuarios); 
// post
// patch
// delete

module.exports = router;
