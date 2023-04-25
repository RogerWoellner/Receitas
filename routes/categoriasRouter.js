const CategoriasController = require('../controllers/categoriasController');
const express = require('express');

const Router = express.Router();

Router.get('/', CategoriasController.listar);
Router.get('/:id', CategoriasController.buscarPorId);
Router.post('/', CategoriasController.salvar);
Router.put('/:id', CategoriasController.atualizar);
Router.delete('/:id', CategoriasController.excluir);

module.exports = Router;
