'user strict';

const mysql = require('mysql');

function MySQL() {}

MySQL.prototype.connect = function() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'davinci',
  });
};

module.exports = MySQL;
