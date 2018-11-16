'use strict';

const moment = require('moment');

const {
  BadRequestError,
  InvalidModelArgumentsError,
  NoRecordFoundError,
} = require('../exceptions');

function Category(code, name, storeId, parentId, status=true) {
  this.code = code || '';
  this.name = name || '';
  this.storeId = storeId || '';
  this.parentId = parentId || '';
  this.status = status ? true : false;
}

Category.prototype.get = function(code, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `select code, name, store_id as storeId, parent_id as parentId, status from category where code='${code}'`,
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

Category.prototype.getAllByStoreId = function(
  id,
  db,
  page = 1,
  pageSize = 20
) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `select code, name, store_id as storeId, parent_id as parentId, status from category where store_id='${id}' limit ${(page -
        1) *
        pageSize}, ${pageSize}`,
      (error, results) => {
        db.end();
        if (error || results.length == 0) {
          reject(new NoRecordFoundError('No categories found.'));
        } else {
          const categories = results.map(cat => {
            const { code, name, storeId, parentId, status } = cat;
            return new Category(code, name, storeId, parentId, status);
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
        `insert into category(code, name, store_id, parent_id) 
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

Category.prototype.delete = function(code, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(`update category set status=0 where code='${code}'`, error => {
      if (error) {
        reject(new BadRequestError('Deleting category failed.'));
      } else {
        resolve('Category deleted.');
      }
    });
  });
};

module.exports = Category;
