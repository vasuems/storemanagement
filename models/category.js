'use strict';

const moment = require('moment');

const {
  BadRequestError,
  InvalidModelArgumentsError,
  NoRecordFoundError,
} = require('../exceptions');

function Category(code, name, storeId, parentId) {
  this.code = code || '';
  this.name = name || '';
  this.storeId = storeId || 0;
  this.parentId = parentId || 0;
}

Category.prototype.get = function(id, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `select user_id as userId, number, type, area_code as areaCode, country_id as countryId from user_contact where user_id='${id}' and status=1`,
      (error, results) => {
        db.end();
        if (error) {
          reject(new NoRecordFoundError('No user found.'));
        } else {
          const contacts = results.map(contact => {
            const { userId, number, type, areaCode, countryId } = contact;
            return new Contact(userId, number, type, areaCode, countryId);
          });
          resolve({ user, contacts });
        }
      }
    );
  });
};

Category.prototype.getCategoriesByStoreId = function(
  id,
  db,
  page = 1,
  pageSize = 20
) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `select code, name, store_id as storeId, parent_id as parentId from categories where store_id='${id}' and status=1 limit ${(page -
        1) *
        pageSize}, ${pageSize}`,
      (error, results) => {
        db.end();
        if (error || results.length == 0) {
          reject(new NoRecordFoundError('No categories found.'));
        } else {
          const categories = results.map(cat => {
            const { code, name, storeId, parentId } = cat;
            return new Category(code, name, storeId, parentId);
          });
          resolve(categories);
        }
      }
    );
  });
};

Category.prototype.add = function(category, db) {
  return new Promise((resolve, reject) => {
    if (category instanceof Category) {
      Object.keys(category).forEach(function(key, index) {
        if (!category[key]) {
          reject(
            new InvalidModelArgumentsError(
              'Not all required fields have a value.'
            )
          );
        }
      });

      const { code, name, storeId, parentId } = category;
      db.connect();
      db.query(
        `insert into categories(code, name, store_id, parent_id) 
         values('${code}', '${name}', '${storeId}', '${parentId}')`,
        (error, results) => {
          db.end();
          if (error || results.affectedRows == 0) {
            reject(new BadRequestError('Invalide category data.'));
          } else {
            resolve(new Category(code, name, storeId, parentId));
          }
        }
      );
    } else {
      reject(new BadRequestError('Invalide category data.'));
    }
  });
};

Category.prototype.delete = function(id, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(`update user set status=0 where id=${id}`, error => {
      if (error) {
        reject(new BadRequestError('Deleting product failed.'));
      } else {
        resolve('Product deleted.');
      }
    });
  });
};

module.exports = {
  Category,
};
