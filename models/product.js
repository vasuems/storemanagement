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
  coverImage,
  manufacturerId,
  supplierId,
  status = true
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
  this.manufacturerId = manufacturerId || '';
  this.supplierId = supplierId || '';
  this.status = status ? true : false;
}

Product.prototype.get = function(code, db) {
  return new Promise((resolve, reject) => {
    db.query(
      `select code, name, category_id as categoryId, store_id as storeId, sku, description, quantity, allow_quantity as allowQuantity,
       added_on as addedOn, added_by as addedBy, unit_price as unitPrice, cost, cover_image as coverImage,
       manufacturer_id as manufacturerId, supplier_id as supplierId, status
       from product where code='${code}'`,
      (error, results) => {
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
            manufacturerId,
            supplierId,
            status,
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
              coverImage,
              manufacturerId,
              supplierId,
              status
            )
          );
        }
      }
    );
  });
};

Product.prototype.getTotalCountByStoreId = function(id, db) {
  return new Promise((resolve, reject) => {
    db.query(
      `select count(*) as total 
       from product where store_id='${id}'`,
      (error, results) => {
        if (error) {
          reject(new NoRecordFoundError('No products found.'));
        } else {
          resolve(results[0].total);
        }
      }
    );
  });
};

Product.prototype.getAllByStoreId = function(id, db, page = 1, pageSize = 20) {
  return new Promise((resolve, reject) => {
    db.query(
      `select code, name, category_id as categoryId, store_id as storeId, sku, description, quantity, allow_quantity as allowQuantity,
       added_on as addedOn, added_by as addedBy, unit_price as unitPrice, cost, cover_image as coverImage,
       manufacturer_id as manufacturerId, supplier_id as supplierId, status
       from product where store_id='${id}' limit ${(page - 1) *
        pageSize}, ${pageSize}`,
      (error, results) => {
        if (error) {
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
              manufacturerId,
              supplierId,
              status,
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
              coverImage,
              manufacturerId,
              supplierId,
              status
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
        manufacturerId,
        supplierId,
      } = product;

      db.query(
        `insert into product(code, name, category_id, store_id, sku, description, quantity, allow_quantity, added_on, added_by, unit_price, cost, cover_image, manufacture_id, supplier_id) 
         values('${code}', '${name}', '${categoryId}', '${storeId}', '${sku}', '${description}', ${quantity}, ${allowQuantity}, '${addedOn}', '${addedBy}', ${unitPrice}, ${cost}, '${coverImage}', ${manufacturerId}, '${supplierId}')`,
        (error, results) => {
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
                coverImage,
                manufacturerId,
                supplierId,
                true
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
