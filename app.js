const express = require('express');
const product = require('./routes/product');

const app = express();

app.use('/api', product);

app.listen(8080, () => console.log("Running on port 8080!"));
