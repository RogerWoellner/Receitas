require('./db/mongo');
const express = require('express');
const servidor = express();
servidor.use(express.json());

//Rotas
const ReceitasRouter = require('./routes/receitasRouter');
servidor.use('/receitas', ReceitasRouter);

const ComentariosRouter = require('./routes/comentariosRouter');
servidor.use('/comentarios', ComentariosRouter);

const CategoriasRouter = require('./routes/CategoriasRouter');
servidor.use('/categorias', CategoriasRouter);



servidor.get('/', function(req, res){    
    res.send('Servidor de APIs rodando...');
});

servidor.listen(3000, function(){
    console.log('Servidor rodando em http://localhost:3000');
});