const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/authUserController')(app)
require('./app/controllers/authProductController')(app)
require('./app/controllers/authSaleController')(app)

app.listen(5000);
