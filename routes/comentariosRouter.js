const ComentariosController = require('../controllers/comentariosController');
const express = require('express');

const Router = express.Router();

Router.get('/', ComentariosController.listar);
Router.get('/:id', ComentariosController.buscarPorId);
Router.post('/', ComentariosController.salvar);
Router.put('/:id', ComentariosController.atualizar);
Router.delete('/:id', ComentariosController.excluir);

module.exports = Router;
