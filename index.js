const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({

    titulo: 'API',
    criadora: 'Rebeca'

  });
});

app.listen(3333);
