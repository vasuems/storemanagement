const express = require('express');
const response = require('./responses');

const router = express.Router();

router.get('/site', (req, res) => {
  res.send({ data: { siteName: 'LF Commerce', siteLogo: '' } });
});

module.exports = router;
