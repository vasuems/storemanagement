const express = require('express');
const response = require('./responses');
const router = express.Router();

router.get("/products/featured", (req, res) => {
  res.send({data: response.featuredProducts});
});

router.get("/products/new", (req, res) => {
  res.send({data: response.newProducts});
});


module.exports = router;
