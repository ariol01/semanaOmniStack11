const express = require('express');
const routes = express.Router();
const crypto = require('crypto');

const connection = require('./database/connection');

routes.use(express.json());

routes.get('/ongs', async (request , response) =>{

  const ongs = await connection('ongs').select('*');
  response.json(ongs);
});

routes.post('/ongs', async (request, response) => {

  const { name, email, whatsapp, city, uf } = request.body;
  const data = request.body;

  const id = crypto.randomBytes(4).toString('HEX');

  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
  });

  console.log(data);

  response.json({ id });

});

module.exports = routes;