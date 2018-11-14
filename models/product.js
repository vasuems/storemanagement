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

Product.prototype.get = function(code, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `select code, name, catigory_id as categoryId, sku, description, quantity, allow_quantity as allowQuantity, added_on as addedOn, added_by as addedBy, unit_price as unitPrice, cover_image as coverImage
       from product where code='${code}' and status=1`,
      (error, results) => {
        db.end();
        if (error || results.length == 0) {
          reject(new NoRecordFoundError('No product found.'));
        } else {
          const { code, name, categoryId, sku, description, quantity, allowQuantity, addedOn, addedBy, unitPrice, coverImage } = results[0];
          resolve(new Product(code, name, categoryId, sku, description, quantity, allowQuantity, addedOn, addedBy, unitPrice, coverImage));
        }
      }
    );
  });
};

Product.prototype.add = function(product, db) {
  return new Promise((resolve, reject) => {
    if (product instanceof Product) {
      Object.keys(product).forEach(function(key, index) {
        if(!product[key]){
          reject(
            new InvalidModelArgumentsError(
              'Not all required fields have a value.'
            )
          );
        }
      });

      const { code, name, categoryId, sku, description, quantity, allowQuantity, addedOn, addedBy, unitPrice, coverImage } = product;
      
      db.connect();      
      db.query(
        `insert into product(code, name, category_id, sku, description, quantity, allow_quantity, added_on, added_by, unit_price, cover_image) 
         values('${code}', '${name}', ${categoryId}, '${sku}', '${description}', ${quantity}, ${allowQuantity}, '${addedOn}', ${addedBy}, ${unitPrice}, '${coverImage}')`,
        (error, results) => {
          db.end();
          if (error || results.affectedRows == 0) {
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
};

Product.prototype.delete = function(code, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(`update product set status=0 where code=${code}`, (error, results) => {
      if (error || results.affectedRows == 0) {
        reject(new BadRequestError('Deleting product failed.'));
      } else {
        resolve('Product deleted.');
      }
    });
  });
};

module.exports = Product;
