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

function Category(code, name, storeId, addedBy, parentId, status = true) {
  this.code = code || '';
  this.name = name || '';
  this.storeId = storeId || '';
  this.addedBy = addedBy || '';
  this.parentId = parentId || '';
  this.status = status ? true : false;
}

Category.prototype.get = function(code) {
  return new Promise((resolve, reject) => {
    db.query(
      `select code, name, store_id as storeId, parent_id as parentId, status from category where code='${code}'`,
      (error, results) => {
        
        if (error) {
          reject(new NoRecordFoundError('No category found.'));
        } else {
          const { code, name, storeId, parentId, status } = results[0];
          resolve(new Category(code, name, storeId, '', parentId, status));
        }
      }
    );
  });
};

Category.prototype.getAllByStoreId = function(id, page = 1, pageSize = 20) {
  return new Promise((resolve, reject) => {
    db.query(
      `select code, name, store_id as storeId, parent_id as parentId, status from category where store_id='${id}' limit ${(page -
        1) *
        pageSize}, ${pageSize}`,
      (error, results) => {
        
        if (error) {
          reject(new NoRecordFoundError('No categories found.'));
        } else {
          const categories = results.map(cat => {
            const { code, name, storeId, parentId, status } = cat;
            return new Category(code, name, storeId, '', parentId, status);
          });
          resolve(categories);
        }
      }
    );
  });
};

Category.prototype.add = function(category) {
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

      const { code, name, storeId, addedBy, parentId } = category;

      db.query(
        `insert into category(code, name, store_id, added_by, parent_id) 
         values('${code}', '${name}', '${storeId}', '${addedBy}', '${parentId}')`,
        (error, results) => {
          
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

Category.prototype.delete = function(code) {
  return new Promise((resolve, reject) => {
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
