// Modules import
const http = require('http');

// Local files import
const requestDAO = require('./requestDAO');

console.log('--- STARTING API... ---');

// Quick HTTP server creation
const server = http.createServer(async function (request, answer) {
  if (request.method === 'GET') {
    if (request.url === '/user' || request.url === '/user/') {
      const lUsersList = await requestDAO.listUsers();
      answer.end(JSON.stringify(lUsersList));
    }
  }
});
server.listen(8080);

console.log('--- API IS NOW RUNNING ---');
