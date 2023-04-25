const ReceitasModel = require('../models/ReceitasModel');

class ReceitasController {

  async listar(req, res){ 
    const resultado = await ReceitasModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    const id = req.params.id;
    const conteudo = await ReceitasModel.findOne({'_id': id});
    res.json(conteudo);
  }

  async salvar(req, res) {            
    const conteudo = req.body;
    const resultado = await ReceitasModel.create(conteudo);
    res.json(resultado);
  }

  async atualizar(req, res){
    const id = req.params.id;
    const conteudo = req.body;        
    const resultado = await ReceitasModel.findOneAndUpdate({'_id': id}, conteudo, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    const id = req.params.id;
    await ReceitasModel.findOneAndDelete({'_id': id});
    res.send("Conteúdo excluído!");
  }
}

module.exports = new ReceitasController();