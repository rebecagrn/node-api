const express = require('express');

const routes = express.Router();


routes.get('/', (request, response) => {
  return response.json({

    titulo: 'API',
    criadora: 'teste'

  });
});

module.exports = routes;