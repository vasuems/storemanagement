'use strict';

const moment = require('moment');

const {
  BadRequestError,
  InvalidModelArgumentsError,
  NoRecordFoundError,
} = require('../exceptions');

function Store(code, name, description, logo, countryId, language, currencyId) {
  this.code = code || '';
  this.name = name || '';
  this.description = description || '';
  this.logo = logo || '';
  this.countryId = countryId || 0;
  this.language = language || 'en';
  this.currencyId = currencyId || 0;
}

Store.prototype.get = function(code, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `select name, code, description, logo, country_id as countryId, language, currency_id as currencyId from store where code='${code}' and status=1`,
      (error, results) => {
        db.end();
        if (error) {
          reject(new NoRecordFoundError('No store found.'));
        } else {          
          const { name, code, description, logo, countryId, language, currencyId } = results[0];
          resolve(new Store(code, name, description, logo, countryId, language, currencyId));
        }
      }
    );
  });
};

Store.prototype.add = function(store, db) {
  return new Promise((resolve, reject) => {
    if (store instanceof Store) {
      db.connect();
      const { code, name, description, logo, countryId, language, currencyId } = store;

      if (!code || !name || !email || !password || !salt) {
        reject(
          new InvalidModelArgumentsError(
            'Not all required fields have a value.'
          )
        );
      }
      db.query(
        `insert into user(code, name, email, password, salt, joined_on, role) values('${code}', '${name}', '${email}', '${password}', '${salt}', '${joinedOn}', '${role}')`,
        error => {
          if (error) {
            reject(new BadRequestError('Invalide user data.'));
          } else {
            resolve(new User(code, name, email));
          }
        }
      );
    } else {
      reject(new BadRequestError('Invalide user data.'));
    }
  });
};

Store.prototype.delete = function(id, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(`update user set status=0 where id=${id}`, error => {
      if (error) {
        reject(new BadRequestError('Deleting user failed.'));
      } else {
        resolve('User deleted.');
      }
    });
  });
};

module.exports = Store;
