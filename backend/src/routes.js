const express = require('express');
const routes = express.Router();


routes.use(express.json());

routes.get('/', (request, response)=>{

const body = request.body;
console.log(body);
  response.json({
    evento:'semana omnistack 11', 
    aluno: 'ariel Veras'
  });
  
  });
  
module.exports = routes;