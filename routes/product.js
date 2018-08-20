const express = require('express');
const response = require('./responses');
const router = express.Router();

router.get("/products/featured", (req, res) => {
  res.send({data: response.featuredProducts});
});

router.get("/products/new", (req, res) => {
  res.send({data: response.newProducts});
});

router.get("/products/:cat", (req, res) => {
  res.send({data: response.newProducts, page: 1});
});

module.exports = router;
