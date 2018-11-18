'use strict';

const moment = require('moment');

const {
  BadRequestError,
  InvalidModelArgumentsError,
  NoRecordFoundError,
} = require('../exceptions');

function Manufacturer(
  code,
  name,
  url,
  email,
  contact,
  address,
  logo,
  storeId,
  countryId,
  createdBy,
  status = true
) {
  this.code = code || '';
  this.name = name || '';
  this.url = url || '';
  this.email = email || '';
  this.contact = contact || '';
  this.address = address || '';
  this.logo = logo || '';
  this.storeId = storeId || '';
  this.countryId = countryId || '';
  this.createdBy = createdBy || '';
  this.status = status ? true : false;
}

Manufacturer.prototype.get = function(code, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `select code, name, url, email, contact, address, logo, store_id as storeId, country_id as countryId, created_by as createdBy, status
       from manufacturer where code='${code}'`,
      (error, results) => {
        db.end();
        if (error || results.length == 0) {
          reject(new NoRecordFoundError('No manufacturer found.'));
        } else {
          const {
            code,
            name,
            url,
            email,
            contact,
            address,
            logo,
            storeId,
            countryId,
            createdBy,
            status,
          } = results[0];
          resolve(
            new Manufacturer(
              code,
              name,
              url,
              email,
              contact,
              address,
              logo,
              storeId,
              countryId,
              createdBy,
              status
            )
          );
        }
      }
    );
  });
};

Manufacturer.prototype.getAllByStoreId = function(
  id,
  db,
  page = 1,
  pageSize = 20
) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `select code, name, url, email, contact, address, logo, store_id as storeId, country_id as countryId, created_by as createdBy, status
       from manufacturer where store_id='${id}' limit ${(page - 1) *
        pageSize}, ${pageSize}`,
      (error, results) => {
        db.end();
        if (error || results.length == 0) {
          reject(new NoRecordFoundError('No manufacturers found.'));
        } else {
          const manufacturers = results.map(supplier => {
            const {
              code,
              name,
              url,
              email,
              contact,
              address,
              logo,
              storeId,
              countryId,
              createdBy,
              status,
            } = supplier;
            return new Manufacturer(
              code,
              name,
              url,
              email,
              contact,
              address,
              logo,
              storeId,
              countryId,
              createdBy,
              status
            );
          });

          resolve(manufacturers);
        }
      }
    );
  });
};

Manufacturer.prototype.add = function(manufacturer, db) {
  return new Promise((resolve, reject) => {
    if (manufacturer instanceof Manufacturer) {
      Object.keys(manufacturer).forEach(function(key, index) {
        if (!manufacturer[key]) {
          reject(
            new InvalidModelArgumentsError(
              'Not all required fields have a value.'
            )
          );
        }
      });

      const {
        code,
        name,
        url,
        email,
        contact,
        address,
        logo,
        storeId,
        countryId,
        createdBy,
      } = manufacturer;

      db.connect();
      db.query(
        `insert into manufacturer(code, name, url, email, contact, address, logo, store_id, country_id, created_by) 
         values('${code}', '${name}', '${url}', '${email}', '${contact}', '${address}', '${logo}', '${storeId}', '${countryId}', '${createdBy}')`,
        (error, results) => {
          db.end();
          if (error || results.affectedRows == 0) {
            reject(new BadRequestError('Invalide manufacturer data.'));
          } else {
            resolve(
              new Manufacturer(
                code,
                name,
                url,
                email,
                contact,
                address,
                logo,
                storeId,
                countryId,
                createdBy
              )
            );
          }
        }
      );
    } else {
      reject(new BadRequestError('Invalide manufacturer data.'));
    }
  });
};

Manufacturer.prototype.delete = function(code, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `update manufacturer set status=0 where code=${code}`,
      (error, results) => {
        if (error || results.affectedRows == 0) {
          reject(new BadRequestError('Deleting manufacturer failed.'));
        } else {
          resolve('Manufacturer deleted.');
        }
      }
    );
  });
};

module.exports = Manufacturer;
