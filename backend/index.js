const express = require('express');

// armazena minha aplicacao 
const app = express();

app.get('/', (request, response)=>{

response.send("Ariel deu hello world /n");
response.send().json({
  evento:'semana omnistack 11', 
  aluno: 'ariel V.'
});

});

// qando chamar a url abre nessa porta a aplicacao
app.listen(3333);