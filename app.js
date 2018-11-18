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
  Contact,
  Store,
  Product,
  Category,
  Public,
} = require('./models');
const { MySQL } = require('./db');
const { UnauthorisedError } = require('./exceptions');

const app = express();
app.use(cors());
const mysql = new MySQL();

const authMiddleware = async (req, res, next) => {
  // This should be replaced by key-value pair storage like memcache
  // or redis when traffic increased
  try {
    if (!req.headers.authorization) {
      throw new UnauthorisedError('Unauthorised request.');
    }
    const auth = new OAuth2Request();
    const res = await auth.validateToken(
      req.headers.authorization,
      mysql.connect()
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
      process.env.tokenSecret
    );
    if (!decoded || decoded.data.code !== req.params.accountCode) {
      throw new UnauthorisedError('Invalid user ID.');
    }

    res.locals.auth = decoded.data;
    next();
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
};

const storeCodeVerifier = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.tokenSecret
    );
    if (!decoded || decoded.data.storeCode !== req.params.storeCode) {
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
    const db = mysql.connect();
    const data = await utility.getCountries(db);

    res.send(data);
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
});

app.get('/currencies', authMiddleware, async (req, res) => {
  try {
    const utility = new Public();
    const db = mysql.connect();
    const data = await utility.getCurrencies(db);

    res.send(data);
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
});

app.post('/auth', async (req, res) => {
  try {
    const db = mysql.connect();
    if (!req.body.refreshToken) {
      const auth = new OAuth2Request(
        req.body.username,
        req.body.password,
        req.body.grantType,
        req.body.scope
      );

      const data = await auth.auth(db);
      //TODO: call another function to get store code

      res.send(data);
    } else {
      const auth = new OAuth2Request();
      const data = await auth.refreshToken(req.body.refreshToken, db);
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
    const db = mysql.connect();
    const data = await user.add(user, db);

    res.send(data);
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
});

app.get(
  '/accounts/:accountCode',
  [authMiddleware, userCodeVerifier],
  async (req, res) => {
    try {
      const user = new User();
      const db = mysql.connect();
      const data = await user.get(req.params.accountCode, db);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:storeCode',
  [authMiddleware, storeCodeVerifier],
  async (req, res) => {
    try {
      const store = new Store();
      const db = mysql.connect();
      const data = await store.get(req.params.storeCode, db);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.put(
  '/stores/:storeCode',
  [authMiddleware, storeCodeVerifier],
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
        req.params.storeCode,
        name,
        description,
        logo,
        countryId,
        language,
        currencyId,
        res.locals.auth.accountCode
      );
      const db = mysql.connect();
      const data = await store.update(store, db);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:storeCode/products/:productCode',
  [authMiddleware, storeCodeVerifier],
  async (req, res) => {
    try {
      const product = new Product();
      const db = mysql.connect();
      const data = await product.get(req.params.productCode, db);

      if (data.storeId !== req.params.storeCode) {
        throw new UnauthorisedError('Invalid product ID.');
      }

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:storeCode/products',
  [authMiddleware, storeCodeVerifier],
  async (req, res) => {
    try {
      const product = new Product();
      const db = mysql.connect();
      const data = await product.getAllByStoreId(req.params.storeCode, db);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.post(
  '/stores/:storeCode/products',
  [authMiddleware, storeCodeVerifier],
  async (req, res) => {
    try {
      const {
        name,
        categoryId,
        storeId,
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
        storeId,
        sku,
        description,
        quantity,
        allowQuantity,
        moment.utc().format('YYYY-MM-DD HH:mm:ss'),
        res.locals.auth.accountCode,
        unitPrice,
        cost,
        coverImage
      );
      const db = mysql.connect();
      const data = await product.add(product, db);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:storeCode/categories',
  [authMiddleware, storeCodeVerifier],
  async (req, res) => {
    try {
      const category = new Category();
      const db = mysql.connect();
      const data = await category.getAllByStoreId(req.params.storeCode, db);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:storeCode/categories/:categoryCode',
  [authMiddleware, storeCodeVerifier],
  async (req, res) => {
    try {
      const category = new Category();
      const db = mysql.connect();
      const data = await category.get(req.params.categoryCode, db);

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

module.exports = app;
