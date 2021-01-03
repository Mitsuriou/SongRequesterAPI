// Imports
const requestDAO = require('./requestDAO');
const http = require('http');

console.log("--- API IS STARTING ---")

// Quick HTTP server creation
var server = http.createServer(
    async function(request, answer)
    {
        if(request.method === 'GET')
        {
            if(request.url === '/temperature' || request.url === '/temperature/')
            {
                const temperature = await requestDAO.listerTemperatures();
                answer.end(JSON.stringify(temperature));
            }
            else if(request.url === '/temperature/moyenne' || request.url === '/temperature/moyenne/')
            {
                const moyenne = await requestDAO.moyenneTemperature();
                answer.end(JSON.stringify(moyenne));
            }
            else if(request.url === '/temperature/mediane' || request.url === '/temperature/mediane/')
            {
                const mediane = await requestDAO.medianeTemperature();
                answer.end(JSON.stringify(mediane));
            }
            else if(request.url === '/temperature/minimum' || request.url === '/temperature/minimum/')
            {
                const minimum = await requestDAO.minimumTemperature();
                answer.end(JSON.stringify(minimum));
            }
            else if(request.url === '/temperature/maximum' || request.url === '/temperature/maximum/')
            {
                const maximum = await requestDAO.maximumTemperature();
                answer.end(JSON.stringify(maximum));
            }
            else if(request.url === '/temperature/mode' || request.url === '/temperature/mode/')
            {
                const mode = await requestDAO.modeTemperature();
                answer.end(JSON.stringify(mode));
            }
        }
    });
server.listen(8080);

console.log("--- API IS NOW RUNNING ---")