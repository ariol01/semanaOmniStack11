const express = require('express');

// armazena minha aplicacao 
const app = express();

app.use(express.json());

//existem requisoções http
// GET, POST, PUT, DELETE

//Tipos de parametros
//query params = dados nomeados enviado por uma url
//route params = serve para acessar algum recurso
// request body = corpo da requisição alterar ou criar recursos 

app.get('/', (request, response)=>{

const body = request.body;
console.log(body);

response.json({
  evento:'semana omnistack 11', 
  aluno: 'ariel Veras'
});

});

// qando chamar a url abre nessa porta a aplicacao
app.listen(3333);