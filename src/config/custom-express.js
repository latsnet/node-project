const express = require('express');
const app = express();

const rotas = require('../app/rotas/rotas');
rotas(app);

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});

module.exports = app;