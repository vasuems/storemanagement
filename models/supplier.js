'use strict';

const { MySQL } = require('../db');
const {
  BadRequestError,
  InvalidModelArgumentsError,
  NoRecordFoundError,
} = require('../exceptions');
require('dotenv').load();

const { host, user, password, database } = process.env;
var db = new MySQL(host, user, password, database);

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
  addedBy,
  status = true
) {
  this.code = code;
  this.name = name;
  this.url = url || '';
  this.email = email || '';
  this.contact = contact;
  this.address = address;
  this.logo = logo || '';
  this.storeId = storeId;
  this.countryId = countryId;
  this.addedBy = addedBy;
  this.status = status ? true : false;
}

Supplier.prototype.get = function (code) {
  return new Promise((resolve, reject) => {
    db.query(
      `select code, name, url, email, contact, address, logo, store_id as storeId, country_id as countryId, added_by as addedBy, status
       from supplier where code='${code}'`,
      (error, results) => {

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
            addedBy,
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
              addedBy,
              status
            )
          );
        }
      }
    );
  });
};

Supplier.prototype.getAllByStoreId = function (id, page = 1, pageSize = 20) {
  return new Promise((resolve, reject) => {
    db.query(
      `select code, name, url, email, contact, address, logo, store_id as storeId, country_id as countryId, added_by as addedBy, status
       from supplier where store_id='${id}'  order by name limit ${(page - 1) *
      pageSize}, ${pageSize}`,
      (error, results) => {
        if (error) {
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
              addedBy,
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
              addedBy,
              status
            );
          });

          resolve(suppliers);
        }
      }
    );
  });
};

Supplier.prototype.add = function (supplier) {
  return new Promise((resolve, reject) => {
    let proceed = true;

    if (supplier instanceof Supplier) {
      Object.keys(supplier).forEach(function (key, index) {
        if (supplier[key] === undefined) {
          reject(
            new InvalidModelArgumentsError(
              'Not all required fields have a value.'
            )
          );
          proceed = false;
        }
      });

      if (!proceed) {
        return;
      }

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
        addedBy,
      } = supplier;

      db.query(
        `insert into supplier(code, name, url, email, contact, address, logo, store_id, country_id, added_by) 
         values('${code}', '${name}', '${url}', '${email}', '${contact}', '${address}', '${logo}', '${storeId}', '${countryId}', '${addedBy}')`,
        (error, results) => {

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
                addedBy
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

Supplier.prototype.delete = function (code) {
  return new Promise((resolve, reject) => {
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
