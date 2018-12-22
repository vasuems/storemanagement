'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const uniqid = require('uniqid');
const randomstring = require('randomstring');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const shortid = require('shortid');
const moment = require('moment');
require('dotenv').load();

const {
  OAuth2Request,
  User,
  Store,
  Product,
  Order,
  Category,
  Public,
  Supplier,
  Manufacturer,
} = require('./models');
const { UnauthorisedError } = require('./exceptions');

const app = express();
app.use(cors());

const { tokenSecret } = process.env;

const authMiddleware = async (req, res, next) => {
  // This should be replaced by key-value pair storage like memcache
  // or redis when traffic increased
  try {
    if (!req.headers.authorization) {
      throw new UnauthorisedError('Unauthorised request.');
    }
    const auth = new OAuth2Request();
    const res = await auth.validateToken(
      req.headers.authorization
    );
    next();
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
};

const userCodeVerifier = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      tokenSecret
    );

    if (!decoded || decoded.data.accountId !== req.params.accountId) {
      throw new UnauthorisedError('Invalid user ID.');
    }
    res.locals.auth = decoded.data;
    next();
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
};

const storeIdVerifier = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      tokenSecret
    );

    if (!decoded || decoded.data.storeId !== req.params.storeId) {
      throw new UnauthorisedError('Invalid store ID');
    }

    res.locals.auth = decoded.data;
    next();
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
};

app.use(bodyParser.json());

// public APIs
app.get('/countries', authMiddleware, async (req, res) => {
  try {
    const utility = new Public();
    const data = await utility.getCountries();

    res.send(data);
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
});

app.get('/currencies', authMiddleware, async (req, res) => {
  try {
    const utility = new Public();
    const data = await utility.getCurrencies();

    res.send(data);
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
});

app.post('/auth', async (req, res) => {
  try {
    if (!req.body.refreshToken) {
      const auth = new OAuth2Request(
        req.body.username,
        req.body.password,
        req.body.grantType,
        req.body.scope
      );
      const data = await auth.auth();
      //TODO: call another function to get store code

      res.send(data);
    } else {
      const auth = new OAuth2Request();
      const data = await auth.refreshToken(req.body.refreshToken);
      res.send(data);
    }
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
});

app.post('/accounts', async (req, res) => {
  try {
    const salt = randomstring.generate(32);
    const user = new User(
      uniqid(),
      req.body.name,
      req.body.email,
      md5(`${req.body.password + salt}`),
      salt
    );
    const data = await user.add(user);

    res.send(data);
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
});

app.get(
  '/accounts/:accountId',
  [authMiddleware, userCodeVerifier],
  async (req, res) => {
    try {
      const user = new User();
      const data = await user.get(req.params.accountId);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:storeId',
  [authMiddleware, storeIdVerifier],
  async (req, res) => {
    try {
      const store = new Store();
      const data = await store.get(req.params.storeId);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.put(
  '/stores/:storeId',
  [authMiddleware, storeIdVerifier],
  async (req, res) => {
    try {
      const {
        code,
        name,
        description,
        logo,
        countryId,
        language,
        currencyId,
      } = req.body;
      const store = new Store(
        req.params.storeId,
        name,
        description,
        logo,
        countryId,
        language,
        currencyId,
        res.locals.auth.accountId
      );
      const data = await store.update(store);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:storeId/products/:productId',
  [authMiddleware, storeIdVerifier],
  async (req, res) => {
    try {
      const product = new Product();
      const data = await product.get(req.params.productId);

      if (data.storeId !== req.params.storeId) {
        throw new UnauthorisedError('Invalid product ID.');
      }

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:storeId/products',
  [authMiddleware, storeIdVerifier],
  async (req, res) => {
    try {
      const product = new Product();
      const data = await product.getAllByStoreId(req.params.storeId, req.query.page || 1, req.query.size || 20);
      const count = await product.getTotalCountByStoreId(req.params.storeId);

      res.send({ data, count });
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.post(
  '/stores/:storeId/products',
  [authMiddleware, storeIdVerifier],
  async (req, res) => {
    try {
      const {
        name,
        categoryId,
        sku,
        description,
        quantity,
        allowQuantity,
        unitPrice,
        cost,
        coverImage,
      } = req.body;
      const product = new Product(
        shortid.generate(),
        name,
        categoryId,
        req.params.storeId,
        sku,
        description,
        quantity,
        allowQuantity,
        moment.utc().format('YYYY-MM-DD HH:mm:ss'),
        res.locals.auth.accountId,
        unitPrice,
        cost,
        coverImage
      );
      const data = await product.add(product);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:storeId/orders',
  [authMiddleware, storeIdVerifier],
  async (req, res) => {
    try {
      const order = new Order();
      const data = await order.getAllByStoreId(req.params.storeId, req.query.page || 1, req.query.size || 20);
      const count = await order.getTotalCountByStoreId(req.params.storeId);

      res.send({ data, count });
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:storeId/orders/:orderId',
  [authMiddleware, storeIdVerifier],
  async (req, res) => {
    try {
      const order = new Order();
      const data = await order.get(req.params.orderId);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.post(
  '/stores/:storeId/orders',
  [authMiddleware, storeIdVerifier],
  async (req, res) => {
    try {
      const {
        isPaid,
        customerName,
        shippingAddress,
        billingAddress,
        contact,
        products,
      } = req.body;

      const order = new Order(
        shortid.generate(),
        req.params.storeId,
        moment.utc().format('YYYY-MM-DD HH:mm:ss'),
        res.locals.auth.accountId,
        isPaid ? moment.utc().format('YYYY-MM-DD HH:mm:ss') : null,
        customerName,
        shippingAddress,
        billingAddress,
        contact,
        products
      );

      const data = await order.add(order);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:storeId/categories',
  [authMiddleware, storeIdVerifier],
  async (req, res) => {
    try {
      const category = new Category();
      const data = await category.getAllByStoreId(req.params.storeId, req.query.page || 1, req.query.size || 20);
      const count = await category.getTotalCountByStoreId(req.params.storeId);

      res.send({ data, count });
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.delete(
  '/stores/:storeId/orders/:orderId',
  [authMiddleware, storeIdVerifier],
  async (req, res) => {
    try {
      const order = new Order();
      await order.delete(req.params.orderId);

      res.send({ data: true });
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.post(
  '/stores/:storeId/categories',
  [authMiddleware, storeIdVerifier],
  async (req, res) => {
    try {
      const {
        name,
        parentId,
      } = req.body;
      const category = new Category(
        shortid.generate(),
        name,
        req.params.storeId,
        res.locals.auth.accountId,
        parentId,
      );
      const data = await category.add(category);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:storeId/categories/:categoryId',
  [authMiddleware, storeIdVerifier],
  async (req, res) => {
    try {
      const category = new Category();
      const data = await category.get(req.params.categoryId);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:storeId/manufacturers',
  [authMiddleware, storeIdVerifier],
  async (req, res) => {
    try {
      const manufacturer = new Manufacturer();
      const data = await manufacturer.getAllByStoreId(req.params.storeId);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:storeId/suppliers',
  [authMiddleware, storeIdVerifier],
  async (req, res) => {
    try {
      const supplier = new Supplier();
      const data = await supplier.getAllByStoreId(req.params.storeId);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

module.exports = app;
