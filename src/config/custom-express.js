require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

const rotas = require('../app/rotas/rotas');
rotas(app);

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});

module.exports = app;