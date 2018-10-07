const express = require('express');
const response = require('./responses');

const router = express.Router();

router.get('/auth', (req, res) => {
  res.send({ data: { accessToken: '123', refreshToken: '456' } });
});

router.get('/products/:cat', (req, res) => {
  res.send({
    data: [...response.newProducts, ...response.featuredProducts],
    page: 1,
  });
});

module.exports = router;
