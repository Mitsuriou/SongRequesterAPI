// Modules import
const express = require('express');
const app = express();

// Local files import
const requestDAO = require('./requestDAO');

// Prevent user to read all users
app.get('/user', async (request, answer) => {
  answer.status(403).json();
});

// Prevent user to read all public profiles
app.get('/public_profile', async (request, answer) => {
  answer.status(403).json();
});

app.get('/public_profile/:id', async (request, answer) => {
  try {
    // Nickname
    if (isNaN(request.params.id)) {
      const lData = await requestDAO.getPublicProfileByNickame(request.params.id);

      // If only one result has been found
      if (lData.length == 1) {
        answer.status(200).json(lData[0]);
      }
      // If no result has been found
      else if (lData.length == 0) {
        answer.status(404).json();
      }
      // If multiple results have been found
      else {
        answer.status(500).json();
      }
    }
    // Numeric ID
    else {
      const lId = parseInt(request.params.id);
      const lData = await requestDAO.getPublicProfileById(lId);

      // If only one result has been found
      if (lData.length == 1) {
        answer.status(200).json(lData[0]);
      }
      // If no result has been found
      else if (lData.length == 0) {
        answer.status(404).json();
      }
      // If multiple results have been found
      else {
        answer.status(500).json();
      }
    }
  } catch (error) {
    answer.status(500).json(error.message);
  }
});

app.listen(8080, function () {
  console.log('|------------------------|');
  console.log('|-- API IS NOW RUNNING --|');
  console.log('|------------------------|');
});
