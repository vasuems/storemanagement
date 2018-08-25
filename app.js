const express = require('express');
const product = require('./routes/product');
const site = require('./routes/site');

const app = express();

app.use('/api', product);
app.use('/api', site);

app.listen(8080, () => console.log('Running on port 8080!'));
