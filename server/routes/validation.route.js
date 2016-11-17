'use strict'

const express = require('express');
const router = express.Router();

// require controller
const Controller = require('../controllers/validation.controller')


// post the data
router.post('/validations', Controller.generate)

// get the data
router.get('/validations', Controller.list)

module.exports = router