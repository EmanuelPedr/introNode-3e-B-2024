const express = require('express'); 
const router = express.Router(); 


// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 

// definição das rotas
router.get('/usuarios', UsuariosController.listarUsuarios); 
router.get('/usuarios', UsuariosController.cadastrarUsuario); 
router.get('/usuarios', UsuariosController.editarUsuario); 
router.get('/usuarios', UsuariosController.apagarUsuario); 
// post
// patch
// delete

module.exports = router;
