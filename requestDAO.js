// Modules import
const postgresql = require('pg');

// Local files import
const IDENTIFIERS = require('./database_identifiers.js');

// Exported functions (ASYNC calls)
exports.getUsers = async function () {
  const lDatabase = new postgresql.Client({
    user: IDENTIFIERS.id,
    password: IDENTIFIERS.password,
    host: IDENTIFIERS.ip,
    port: IDENTIFIERS.port,
    client_encoding: 'UTF8',
    database: IDENTIFIERS.database,
  });

  const lRequest = 'SELECT * FROM sr.user;';
  await lDatabase.connect();
  var lUsersList = await lDatabase.query(lRequest);
  await lDatabase.end();

  return lUsersList.rows;
};

exports.getUserById = async function (aId) {
  const lDatabase = new postgresql.Client({
    user: IDENTIFIERS.id,
    password: IDENTIFIERS.password,
    host: IDENTIFIERS.ip,
    port: IDENTIFIERS.port,
    client_encoding: 'UTF8',
    database: IDENTIFIERS.database,
  });

  const lRequest = `SELECT * FROM sr.user where sr.user.id = ${aId};`;
  await lDatabase.connect();
  var lUsersList = await lDatabase.query(lRequest);
  await lDatabase.end();

  return lUsersList.rows;
};

exports.getPublicProfileById = async function (id) {
  const lDatabase = new postgresql.Client({
    user: IDENTIFIERS.id,
    password: IDENTIFIERS.password,
    host: IDENTIFIERS.ip,
    port: IDENTIFIERS.port,
    client_encoding: 'UTF8',
    database: IDENTIFIERS.database,
  });

  const lRequest = `SELECT * FROM PUBLIC_PROFILE WHERE id = ${id};`;
  await lDatabase.connect();
  var lProfileInformation = await lDatabase.query(lRequest);
  await lDatabase.end();

  return lProfileInformation.rows;
};

exports.getPublicProfileByNickame = async function (aNickame) {
  const lDatabase = new postgresql.Client({
    user: IDENTIFIERS.id,
    password: IDENTIFIERS.password,
    host: IDENTIFIERS.ip,
    port: IDENTIFIERS.port,
    client_encoding: 'UTF8',
    database: IDENTIFIERS.database,
  });

  const lRequest = `SELECT * FROM PUBLIC_PROFILE WHERE nickname = '${aNickame}';`;
  await lDatabase.connect();
  var lProfileInformation = await lDatabase.query(lRequest);
  await lDatabase.end();

  return lProfileInformation.rows;
};
