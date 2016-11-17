'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

const app = express();


// Require Routes
const validation = require('./routes/validation.route');

// mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/validation')

// Use native promises
mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// require routes
app.use('/api', validation)


app.listen(port, () => {
  console.log('server is running on port ', port)
})
