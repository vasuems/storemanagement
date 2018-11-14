'use strict';

const moment = require('moment');

const {
  BadRequestError,
  InvalidModelArgumentsError,
  NoRecordFoundError,
} = require('../exceptions');

function Store(code, name, description, logo, countryId, language, currencyId, createdBy, facebook, twitter) {
  this.code = code || '';
  this.name = name || '';
  this.description = description || '';
  this.logo = logo || '';
  this.countryId = countryId || 0;
  this.language = language || 'en';
  this.currencyId = currencyId || 0;
  this.createdBy = createdBy || 0;
  this.facebook = facebook || '';
  this.twitter = twitter || '';
}

Store.prototype.get = function(code, db) { 
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `select name, code, description, logo, country_id as countryId, language, currency_id as currencyId, facebook, twitter 
       from store where code='${code}' and status=1`,
      (error, results) => {  
        db.end();
        if (error || results.length == 0) {
          reject(new NoRecordFoundError('No store found.'));
        } else {   
          const { name, code, description, logo, countryId, language, currencyId, facebook, twitter } = results[0];
          resolve(new Store(code, name, description, logo, countryId, language, currencyId, '', facebook, twitter));
        }
      }
    );
  });
};

Store.prototype.add = function(store, db) {
  return new Promise((resolve, reject) => {
    if (store instanceof Store) {
      Object.keys(store).forEach(function(key, index) {
        if(!store[key]){
          reject(
            new InvalidModelArgumentsError(
              'Not all required fields have a value.'
            )
          );
        }
      });

      const { code, name, description, logo, countryId, language, currencyId, createdBy, facebook, twitter } = store;
      db.connect();
      db.query(
        `insert into store(name, code, description, created_on, created_by, logo, country_id, language, currency_id, facebook, twitter) 
         values('${name}', '${code}', '${description}', '${ moment.utc().format('YYYY-MM-DD HH:mm:ss')}', '${createdBy}', '${logo}', ${countryId}, '${language}', ${currencyId}, '${facebook}', '${twitter}')`,
        (error, results) => {
          db.end();
          if (error || results.affectedRows == 0) {
            reject(new BadRequestError('Invalide store data.'));
          } else {
            resolve(new Store(code, name, description, logo, countryId, language, currencyId, createdBy, facebook, twitter));
          }
        }
      );
    } else {
      reject(new BadRequestError('Invalide store data.'));
    }
  });
};

Store.prototype.update = function(store, db) {
  return new Promise((resolve, reject) => {
    if (store instanceof Store) {
      const { code, name, description, logo, countryId, language, currencyId, createdBy, facebook, twitter } = store;
      db.connect();
      db.query(
        `update store set name='${name}', logo='${logo}', description='${description}', currency_id='${currencyId}', language='${language}', country_id=${countryId}, facebook='${facebook}', twitter='${twitter}'
         where code='${code}' and created_by='${createdBy}'`,
        (error, results) => {
          db.end();
          if (error || results.affectedRows == 0) {
            reject(new BadRequestError('Invalide store data.'));
          } else {
            resolve(new Store(code, name, description, logo, countryId, language, currencyId, createdBy, facebook, twitter ));
          }
        }
      );
    } else {
      reject(new BadRequestError('Invalide store data.'));
    }
  });
};

Store.prototype.delete = function(code, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(`update store set status=0 where code=${code}`, (error, results) => {
      if (error || results.affectedRows == 0) {
        reject(new BadRequestError('Deleting store failed.'));
      } else {
        resolve('Store deleted.');
      }
    });
  });
};

module.exports = Store;
