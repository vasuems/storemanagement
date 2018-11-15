'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const uniqid = require('uniqid');
const randomstring = require('randomstring');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
require('dotenv').load();

const { OAuth2Request, User, Contact, Store, Product } = require('./models');
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
      new MySQL().connect()
    );
    next();
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
};

const userCodeVerifier = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, process.env.tokenSecret);
    if (!decoded || decoded.data.code !== req.params.code) {
      throw new UnauthorisedError('Invalid user ID.');
    }

    next();
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
};

const getUserCodes = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, process.env.tokenSecret);
    if (!decoded) {
      throw new UnauthorisedError('Invalid user ID.');
    }

    res.locals.code = decoded.data.code;
    res.locals.storeCode = decoded.data.storeCode;
    next();
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
};

app.use(bodyParser.json());

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
    const mysql = new MySQL();
    const db = mysql.connect();

    const data = await user.add(user, db);
    res.send(data);
  } catch (err) {
    res.status(err.statusCode).send(err);
  }
});

app.get(
  '/accounts/:code',
  [authMiddleware, userCodeVerifier],
  async (req, res) => {
    try {
      const user = new User();
      const mysql = new MySQL();
      const db = mysql.connect();

      const data = await user.get(res.locals.code, db);
      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.post(
  '/accounts/:code/contacts',
  [authMiddleware, userCodeVerifier],
  async (req, res) => {
    try {
      const user = new User();
      const mysql = new MySQL();
      const db = mysql.connect();

      const data = await user.addContact(
        new Contact(
          res.locals.code,
          req.body.number,
          req.body.type,
          req.body.areaCode,
          req.body.countryId
        ),
        db
      );
      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.put(
  '/accounts/:code/contacts',
  [authMiddleware, userCodeVerifier],
  async (req, res) => {
    try {
      const user = new User();
      const mysql = new MySQL();
      const db = mysql.connect();

      const data = await user.updateContact(
        req.body.id,
        new Contact(
          res.locals.code,
          req.body.number,
          req.body.type,
          req.body.areaCode,
          req.body.countryId
        ),
        db
      );
      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.delete(
  '/accounts/:code/contacts/:id',
  [authMiddleware, userCodeVerifier],
  async (req, res) => {
    try {
      const user = new User();
      const mysql = new MySQL();
      const db = mysql.connect();

      const data = await user.deleteContact(req.params.id, db);
      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/stores/:code',
  authMiddleware,
  async (req, res) => {
    try {
      const store = new Store();
      const mysql = new MySQL();
      const db = mysql.connect();
      const data = await store.get(req.params.code, db);
      
      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.put(
  '/stores/:code',
  [authMiddleware, getUserCodes],
  async (req, res) => {
    try {
      const { code, name, description, logo, countryId, language, currencyId } =  req.body;
      const store = new Store(code, name, description, logo, countryId, language, currencyId, res.locals.code);
      const mysql = new MySQL();
      const db = mysql.connect();
      const data = await store.update(store, db);      
      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

app.get(
  '/products/:code',
  [authMiddleware, getUserCodes],
  async (req, res) => {
    try {
      const product = new Product();
      const mysql = new MySQL();
      const db = mysql.connect();
      const data = await product.get(req.params.code, db);
      
      if(data.storeId !== res.locals.storeCode){
        throw new UnauthorisedError('Invalid product ID.');
      }

      res.send(data);
    } catch (err) {
      res.status(err.statusCode).send(err);
    }
  }
);

module.exports = app;