'user strict';

const mysql = require('mysql');

function MySQL(host, user, password, database) {
  return mysql.createConnection({
    host,
    user,
    password,
    database,
  });
}

module.exports = MySQL;
