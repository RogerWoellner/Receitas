const ReceitasController = require('../controllers/receitasController');
const express = require('express');

const Router = express.Router();

Router.get('/receitas', ReceitasController.listar);
Router.get('/:id', ReceitasController.buscarPorId);
Router.post('/receitas', ReceitasController.salvar);
Router.put('/:id', ReceitasController.atualizar);
Router.delete('/:id', ReceitasController.excluir);

module.exports = Router;
