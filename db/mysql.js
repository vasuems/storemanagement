'user strict';

const mysql = require('mysql');
require('dotenv').load();

function MySQL() {}

MySQL.prototype.connect = function() {
  const { host, user, password, database } = process.env;
  return mysql.createConnection({
    host,
    user,
    password,
    database,
  });
};

module.exports = MySQL;
