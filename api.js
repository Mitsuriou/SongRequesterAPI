// Modules import
const express = require('express');

// Local files import
const requestDAO = require('./requestDAO');

const app = express();

// READ a public profile by ID
app.get('/public_profile/:id', async (request, answer) => {
  try {
    // Starting sanitizing process
    if (isNaN(request.params.id)) {
      throw new Error("The request parameter 'id' must be a number.");
    }

    const lId = parseInt(request.params.id);

    if (lId < 0) {
      throw new Error("The request parameter 'id' cannot be negative.");
    }
    // End of the sanitizing process

    // Read the data
    const lData = await requestDAO.getPublicProfileById(lId);

    // If only one result has been found
    if (lData.length == 1) {
      answer.status(200).json(lData[0]);
    }
    // If no result has been found
    else if (lData.length == 0) {
      answer.status(404).json({ message: `The profile with ID ${lId} could not be found or does not exist.` });
    }
    // If multiple results have been found
    else {
      throw new Error('Multiple profiles with matching ID have been found.');
    }
  } catch (aError) {
    answer.status(500).json({ message: aError.message });
  }
});

// READ EVERY REQUESTS
app.get('/requests/', async (request, answer) => {
  try {
    const filters = request.query;

    if (filters.to == null) {
      throw new Error({ message: "Filter 'to' missing." });
    }

    const lId = parseInt(filters.to);
    if (isNaN(lId)) {
      throw new Error({ message: "Filter 'to' missing." });
    }

    const lData = await requestDAO.getRequestsToUserID(lId);
    answer.status(200).json(lData);
  } catch (error) {
    answer.status(500).json(error.message);
  }
});

//
// app.get('/request_to/:id_to/from/:id_from', async (request, answer) => {
//   try {
//     const lFromUserId = parseInt(request.params.id_from);
//     const lToUserId = parseInt(request.params.id_to);
//     if (isNaN(lFromUserId) || isNaN(lToUserId)) {
//       answer.status(500).json();
//       return;
//     }

//     const lData = await requestDAO.getRequestsFromTo(lFromUserId, lToUserId);
//     answer.status(200).json(lData);
//   } catch (error) {
//     answer.status(500).json(error.message);
//   }
// });

// Make the server listen the port 8080
app.listen(8080, function () {
  console.log('-- API IS NOW RUNNING --');
});
