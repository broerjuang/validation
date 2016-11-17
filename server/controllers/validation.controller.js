'use strict'

const Validates = require('../models/Validation.model')

let generate = (req, res) => {
  Validates
    .create(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
}


let list = (req, res) => {
  Validates
    .find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
}

module.exports = {
  generate,
  list
}