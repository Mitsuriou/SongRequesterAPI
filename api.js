// Modules import
const express = require('express');
const app = express();

// Local files import
const requestDAO = require('./requestDAO');

app.get('/users', async (request, answer) => {
  try {
    answer.status(200).json(await requestDAO.allUsers());
  } catch (error) {
    answer.status(500).json(error.message);
  }
});

app.get('/user/:id', async (request, answer) => {
  try {
    answer.status(200).json(await requestDAO.getUser(request.params.id));
  } catch (error) {
    answer.status(500).json(error.message);
  }
});

app.listen(8080, function () {
  console.log('--- API IS NOW RUNNING ---');
});
