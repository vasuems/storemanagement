'use strict';

const moment = require('moment');

const {
  BadRequestError,
  InvalidModelArgumentsError,
  NoRecordFoundError,
} = require('../exceptions');

function Public() {}

Public.prototype.getCountries = function(db) {
  return new Promise((resolve, reject) => {
    db.query(
      'select id, name, flag, tel_code as telCode from country',
      (error, results) => {
        if (error || results.length == 0) {
          reject(new NoRecordFoundError('No countries found.'));
        } else {
          resolve(results);
        }
      }
    );
  });
};

Public.prototype.getCurrencies = function(db) {
  return new Promise((resolve, reject) => {
    db.query('select * from currency', (error, results) => {
      if (error || results.length == 0) {
        reject(new NoRecordFoundError('No currencies found.'));
      } else {
        resolve(results);
      }
    });
  });
};

Public.prototype.delete = function(code, db) {
  return new Promise((resolve, reject) => {
    db.query(
      `update product set status=0 where code=${code}`,
      (error, results) => {
        if (error || results.affectedRows == 0) {
          reject(new BadRequestError('Deleting product failed.'));
        } else {
          resolve('Product deleted.');
        }
      }
    );
  });
};

module.exports = Public;
