const express = require('express');
const routes = require('./routes');
// armazena minha aplicacao 
const app = express();

app.use(routes);

//existem requisoções http
// GET, POST, PUT, DELETE

//Tipos de parametros
//query params = dados nomeados enviado por uma url
//route params = serve para acessar algum recurso
// request body = corpo da requisição alterar ou criar recursos 


// qando chamar a url abre nessa porta a aplicacao
app.listen(3333);