const ComentariosModel = require('../models/ComentariosModel');

class ComentariosController {

  async listar(req, res){ 
    const resultado = await ComentariosModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    const id = req.params.id;
    const conteudo = await ComentariosModel.findOne({'_id': id});
    res.json(conteudo);
  }

  async salvar(req, res) {            
    const conteudo = req.body;
    const resultado = await ComentariosModel.create(conteudo);
    res.json(resultado);
  }

  async atualizar(req, res){
    const id = req.params.id;
    const conteudo = req.body;        
    const resultado = await ComentariosModel.findOneAndUpdate({'_id': id}, conteudo, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    const id = req.params.id;
    await ComentariosModel.findOneAndDelete({'_id': id});
    res.send("Conteúdo excluído!");
  }
}

module.exports = new ComentariosController();