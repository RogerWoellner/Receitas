const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriasSchema = new Schema({
  _id: Number,
  categoria : String
}, { 
  versionKey: false 
});

//Função geradora de id sequencial
CategoriasSchema.pre('save', async function(next){
  //Busca o objeto com o maior id no banco e gera novo id
  const Model = mongoose.model('categorias', CategoriasSchema);
  const objMaxId = await Model.findOne().sort({'_id': -1});
  this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  next();
});

module.exports = mongoose.model('categorias', CategoriasSchema);