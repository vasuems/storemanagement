'use strict';

const moment = require('moment');

const {
  BadRequestError,
  InvalidModelArgumentsError,
  NoRecordFoundError,
} = require('../exceptions');

function Supplier(
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

Supplier.prototype.get = function(code, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `select code, name, url, email, contact, address, logo, store_id as storeId, country_id as countryId, created_by as createdBy, status
       from supplier where code='${code}'`,
      (error, results) => {
        db.end();
        if (error || results.length == 0) {
          reject(new NoRecordFoundError('No supplier found.'));
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
            new Supplier(
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

Supplier.prototype.getAllByStoreId = function(id, db, page = 1, pageSize = 20) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `select code, name, url, email, contact, address, logo, store_id as storeId, country_id as countryId, created_by as createdBy, status
       from supplier where store_id='${id}' limit ${(page - 1) *
        pageSize}, ${pageSize}`,
      (error, results) => {
        db.end();
        if (error || results.length == 0) {
          reject(new NoRecordFoundError('No suppliers found.'));
        } else {
          const suppliers = results.map(supplier => {
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
            return new Supplier(
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

          resolve(suppliers);
        }
      }
    );
  });
};

Supplier.prototype.add = function(supplier, db) {
  return new Promise((resolve, reject) => {
    if (supplier instanceof Supplier) {
      Object.keys(supplier).forEach(function(key, index) {
        if (!supplier[key]) {
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
      } = supplier;

      db.connect();
      db.query(
        `insert into supplier(code, name, url, email, contact, address, logo, store_id, country_id, created_by) 
         values('${code}', '${name}', '${url}', '${email}', '${contact}', '${address}', '${logo}', '${storeId}', '${countryId}', '${createdBy}')`,
        (error, results) => {
          db.end();
          if (error || results.affectedRows == 0) {
            reject(new BadRequestError('Invalide supplier data.'));
          } else {
            resolve(
              new Supplier(
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
      reject(new BadRequestError('Invalide supplier data.'));
    }
  });
};

Supplier.prototype.delete = function(code, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `update supplier set status=0 where code=${code}`,
      (error, results) => {
        if (error || results.affectedRows == 0) {
          reject(new BadRequestError('Deleting supplier failed.'));
        } else {
          resolve('Supplier deleted.');
        }
      }
    );
  });
};

module.exports = Supplier;
