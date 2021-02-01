// Modules import
const express = require('express');
const app = express();

// Local files import
const requestDAO = require('./requestDAO');

app.get('/user', async (request, answer) => {
  try {
    const lUsersList = await requestDAO.listUsers();
    answer.status(200).json(lUsersList);
  } catch (error) {
    console.log(error);
    answer.status(500).json(error.message);
  }
});

app.listen(8080, function () {
  console.log('--- API IS NOW RUNNING ---');
});
