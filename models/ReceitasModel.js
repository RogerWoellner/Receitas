const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReceitasSchema = new Schema({
  _id: Number,
  nome: String,
  descricao: String,
  ingredientes: [String],
  preparo: [String],
  tempoPreparo: Number,
  rendimento: String,
}, { 
  versionKey: false 
});

//Função geradora de id sequencial
ReceitasSchema.pre('save', async function(next){
  //Busca o objeto com o maior id no banco e gera novo id
  const Model = mongoose.model('receitas', ReceitasSchema);
  const objMaxId = await Model.findOne().sort({'_id': -1});
  this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  next();
});

module.exports = mongoose.model('receitas', ReceitasSchema);
