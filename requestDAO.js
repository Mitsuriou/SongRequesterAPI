// Modules import
const postgresql = require('pg');

// Local files import
const IDENTIFIERS = require('./database_identifiers.js');

// Exported functions (ASYNC calls)
exports.allUsers = async function () {
  const lDatabase = new postgresql.Client({
    user: IDENTIFIERS.id,
    password: IDENTIFIERS.password,
    host: IDENTIFIERS.ip,
    port: IDENTIFIERS.port,
    client_encoding: 'UTF8',
    database: IDENTIFIERS.database,
  });

  const SQL_REQUEST = 'SELECT * FROM sr.user;';
  await lDatabase.connect();
  var lUsersList = await lDatabase.query(SQL_REQUEST);
  await lDatabase.end();

  return lUsersList.rows;
};

exports.getUser = async function (id) {
  const lDatabase = new postgresql.Client({
    user: IDENTIFIERS.id,
    password: IDENTIFIERS.password,
    host: IDENTIFIERS.ip,
    port: IDENTIFIERS.port,
    client_encoding: 'UTF8',
    database: IDENTIFIERS.database,
  });

  const SQL_REQUEST = `SELECT * FROM sr.user where sr.user.id = ${id};`;
  await lDatabase.connect();
  var lUsersList = await lDatabase.query(SQL_REQUEST);
  await lDatabase.end();

  return lUsersList.rows;
};
