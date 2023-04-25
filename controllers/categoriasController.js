const CategoriasModel = require('../models/CategoriasModel');

class CategoriasController {

  async listar(req, res){ 
    const resultado = await CategoriasModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    const id = req.params.id;
    const conteudo = await CategoriasModel.findOne({'_id': id});
    res.json(conteudo);
  }

  async salvar(req, res) {            
    const conteudo = req.body;
    const resultado = await CategoriasModel.create(conteudo);
    res.json(resultado);
  }

  async atualizar(req, res){
    const id = req.params.id;
    const conteudo = req.body;        
    const resultado = await CategoriasModel.findOneAndUpdate({'_id': id}, conteudo, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    const id = req.params.id;
    await CategoriasModel.findOneAndDelete({'_id': id});
    res.send("Conteúdo excluído!");
  }
}

module.exports = new CategoriasController()