const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async cadastrarUsuario(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Usuario.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async editarUsuario(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar Usuarios.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async apagarUsuario(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar Usuario', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
};  
