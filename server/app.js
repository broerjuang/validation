'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

const app = express();


// Require Routes
const validation = require('./validation.route');

// mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/event')

// Use native promises
mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// require routes






app.listen(port, () => {
  console.log('server is running on port ', port)
})
