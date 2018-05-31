/**
 * Created by Ziaur on 29/05/2018.
 */

const express = require('express');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

const app = express();


app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

require('./routes/api.js')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);