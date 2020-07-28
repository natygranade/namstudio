const db = require('../db/models')
const {check, validationResult, body} = require ('express-validator')
let express = require('express');


const loginMiddleware = [
  check ('email').isEmail().withMessage('Completar mail'),
  check ('password').isLength({min: 4, max:8}).withMessage('La contraseña debe ser de 4 a 8 caracteres')
]


module.exports = loginMiddleware