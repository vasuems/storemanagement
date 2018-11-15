'use strict';

const moment = require('moment');

const {
  BadRequestError,
  InvalidModelArgumentsError,
  NoRecordFoundError,
} = require('../exceptions');

function Product(
  code,
  name,
  categoryId,
  storeId,
  sku,
  description,
  quantity,
  allowQuantity,
  addedOn,
  addedBy,
  unitPrice,
  cost,
  coverImage
) {
  this.code = code || '';
  this.name = name || '';
  this.categoryId = categoryId || '';
  this.storeId = storeId || '';
  this.sku = sku || '';
  this.description = description || '';
  this.quantity = quantity || 0;
  this.allowQuantity = allowQuantity || true;
  this.addedOn = addedOn || moment.utc().format('YYYY-MM-DD HH:mm:ss');
  this.addedBy = addedBy || 0;
  this.unitPrice = unitPrice || 0.0;
  this.cost = cost || 0.0;
  this.coverImage = coverImage || '';
}

Product.prototype.get = function(code, db) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `select code, name, catigory_id as categoryId, store_id as storeId, sku, description, quantity, allow_quantity as allowQuantity, added_on as addedOn, added_by as addedBy, unit_price as unitPrice, cost, cover_image as coverImage
       from product where code='${code}' and status=1`,
      (error, results) => {
        db.end();
        if (error || results.length == 0) {
          reject(new NoRecordFoundError('No product found.'));
        } else {
          const {
            code,
            name,
            categoryId,
            storeId,
            sku,
            description,
            quantity,
            allowQuantity,
            addedOn,
            addedBy,
            unitPrice,
            cost,
            coverImage,
          } = results[0];
          resolve(
            new Product(
              code,
              name,
              categoryId,
              storeId,
              sku,
              description,
              quantity,
              allowQuantity,
              addedOn,
              addedBy,
              unitPrice,
              cost,
              coverImage
            )
          );
        }
      }
    );
  });
};

Product.prototype.getAllByStoreId = function(id, db, page = 1, pageSize = 20) {
  return new Promise((resolve, reject) => {
    db.connect();
    db.query(
      `select code, name, catigory_id as categoryId, store_id as storeId, sku, description, quantity, allow_quantity as allowQuantity, added_on as addedOn, added_by as addedBy, unit_price as unitPrice, cost, cover_image as coverImage
       from product where store_id='${id}' and status=1 limit ${(page - 1) *
        pageSize}, ${pageSize}`,
      (error, results) => {
        db.end();
        if (error || results.length == 0) {
          reject(new NoRecordFoundError('No products found.'));
        } else {
          const products = results.map(product => {
            const {
              code,
              name,
              categoryId,
              storeId,
              sku,
              description,
              quantity,
              allowQuantity,
              addedOn,
              addedBy,
              unitPrice,
              cost,
              coverImage,
            } = product;
            return new Product(
              code,
              name,
              categoryId,
              storeId,
              sku,
              description,
              quantity,
              allowQuantity,
              addedOn,
              addedBy,
              unitPrice,
              cost,
              coverImage
            );
          });

          resolve(products);
        }
      }
    );
  });
};

Product.prototype.add = function(product, db) {
  return new Promise((resolve, reject) => {
    if (product instanceof Product) {
      Object.keys(product).forEach(function(key, index) {
        if (!product[key]) {
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
        categoryId,
        storeId,
        sku,
        description,
        quantity,
        allowQuantity,
        addedOn,
        addedBy,
        unitPrice,
        cost,
        coverImage,
      } = product;

      db.connect();
      db.query(
        `insert into product(code, name, category_id, store_id, sku, description, quantity, allow_quantity, added_on, added_by, unit_price, cost, cover_image) 
         values('${code}', '${name}', ${categoryId}, ${storeId}, '${sku}', '${description}', ${quantity}, ${allowQuantity}, '${addedOn}', ${addedBy}, ${unitPrice}, ${cost}, '${coverImage}')`,
        (error, results) => {
          db.end();
          if (error || results.affectedRows == 0) {
            reject(new BadRequestError('Invalide product data.'));
          } else {
            resolve(
              new Product(
                code,
                name,
                categoryId,
                storeId,
                sku,
                description,
                quantity,
                allowQuantity,
                addedOn,
                addedBy,
                unitPrice,
                cost,
                coverImage
              )
            );
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
    db.query(
      `update product set status=0 where code=${code}`,
      (error, results) => {
        if (error || results.affectedRows == 0) {
          reject(new BadRequestError('Deleting product failed.'));
        } else {
          resolve('Product deleted.');
        }
      }
    );
  });
};

module.exports = Product;
