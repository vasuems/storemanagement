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
}

Category.prototype.getCategoriesByStoreId = function(id, db, page=1, pageSize=20) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `select id, name, parent_id as parentId from categories where store_id='${id}' and status=1`,
      (error, results) => {
        db.end();
        if (error) {
          reject(new NoRecordFoundError('No categories found.'));
        } else {
          const contacts = results.map(contact => {
            const { id, name, parentId } = contact;
            return new Category(userId, number, type, areaCode, countryId);
          });
          resolve({ user, contacts });
        }
      }
    );
  });
}


Category.prototype.add = function(product, db) {
  return new Promise((resolve, reject) => {
    if (product instanceof Product) {
      db.connect();
      const { code, name, categoryId, sku, description, quantity, allowQuantity, addedOn, addedBy, unitPrice, coverImage } = product;

      if (!code || !name || !categoryId || !sku || !description || !quantity|| !allowQuantity|| !addedOn|| !addedBy|| !unitPrice|| !coverImage) {
        reject(
          new InvalidModelArgumentsError(
            'Not all required fields have a value.'
          )
        );
      }
      db.query(
        `insert into product(code, name, category_id, sku, description, quantity, allow_quantity, added_on, added_by, unit_price, cover_image) 
         values('${code}', '${name}', ${categoryId}, '${sku}', '${description}', ${quantity}, ${allowQuantity}, '${addedOn}', ${addedBy}, ${unitPrice}, '${coverImage}')`,
        error => {
          db.end();
          if (error) {
            reject(new BadRequestError('Invalide product data.'));
          } else {
            resolve(new Product(code, name, categoryId, sku, description, quantity, allowQuantity, addedOn, addedBy, unitPrice, coverImage));
          }
        }
      );
    } else {
      reject(new BadRequestError('Invalide product data.'));
    }
  });
}

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
}

module.exports = {
  Category,
}
