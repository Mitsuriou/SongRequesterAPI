// Modules import
const postgresql = require('pg');

// Local files import
const IDENTIFIERS = require('./database_identifiers.js');

// SQL requests
const SQL_BASIC_REQUEST = 'SELECT * FROM sr.user;';

// Exported functions (ASYNC calls)
exports.listUsers = async function () {
  const lDatabase = new postgresql.Client({
    user: IDENTIFIERS.id,
    password: IDENTIFIERS.password,
    host: IDENTIFIERS.ip,
    port: IDENTIFIERS.port,
    client_encoding: 'UTF8',
    database: IDENTIFIERS.database,
  });

  await lDatabase.connect();
  var lUsersList = await lDatabase.query(SQL_BASIC_REQUEST);
  await lDatabase.end();

  console.log(lUsersList.rows);

  return lUsersList.rows;
};
