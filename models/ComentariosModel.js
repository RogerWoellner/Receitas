const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComentariosSchema = new Schema({
  _id: Number,
  comentario : String
}, { 
  versionKey: false 
});

//Função geradora de id sequencial
ComentariosSchema.pre('save', async function(next){
  //Busca o objeto com o maior id no banco e gera novo id
  const Model = mongoose.model('comentarios', ComentariosSchema);
  const objMaxId = await Model.findOne().sort({'_id': -1});
  this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  next();
});

module.exports = mongoose.model('comentarios', ComentariosSchema);