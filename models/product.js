'use strict';

const moment = require('moment');

const {
  BadRequestError,
  InvalidModelArgumentsError,
  NoRecordFoundError,
} = require('../exceptions');

function Product(code, name, categoryId, sku, description, quantity, allowQuantity, addedOn, addedBy, unitPrice, coverImage) {
  this.code = code || '';
  this.name = name || '';
  this.categoryId = categoryId || 0;
  this.sku = sku || '';
  this.description = description || '';
  this.quantity = quantity || 0;
  this.allowQuantity = allowQuantity || true;
  this.addedOn = addedOn || moment.utc().format('YYYY-MM-DD HH:mm:ss');
  this.addedBy = addedBy || 0;
  this.unitPrice = unitPrice || 0.00;
  this.coverImage = coverImage || '';
}

Product.prototype.getProduct = function(id, db) {
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
}

Product.prototype.addProduct = function(product, db) {
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

Product.prototype.deleteProduct = function(id, db) {
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
  Product,
}
