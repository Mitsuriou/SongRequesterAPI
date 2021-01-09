// Modules import
const postgresql = require('pg');

// Local files import
const IDENTIFIERS = require('./database_identifiers.js');

// Global constants and variables
const CONNECTION_STRING = 'postgres://' + IDENTIFIERS.id + ':' + IDENTIFIERS.password
    +'@' + IDENTIFIERS.ip + ':' + IDENTIFIERS.port + '/' + IDENTIFIERS.database;

// SQL requests
const SQL_BASIC_REQUEST = "SELECT * FROM sr.user;";

exports.listUsers = async function() {
    const lDatabase = new postgresql.Client(CONNECTION_STRING);

    await lDatabase.connect();
    var lUsersList = await lDatabase.query(SQL_BASIC_REQUEST);
    await lDatabase.end();

    return lUsersList.rows;
};
