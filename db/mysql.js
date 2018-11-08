'user strict';

const mysql = require('mysql');
const env = require('../env.json');

function MySQL() {}

MySQL.prototype.connect = function() {
  const { host, user, password, database } = env;
  return mysql.createConnection({
    host,
    user,
    password,
    database,
  });
};

module.exports = MySQL;
