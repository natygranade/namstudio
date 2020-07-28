const {check, validationResult, body} = require ('express-validator')
let express = require('express');
const db = require('../db/models')


let signupMiddleware = [
    check ('email').isEmail().withMessage('Completar mail'),
    check('name').isLength({min:1}).withMessage('Completar nombre y apellido'),
    check ('password')
    .isLength({min: 4, max:8}).withMessage('Completar contraseña de 4 a 8 caracteres'),
    body('passwordRepeat').custom((value, { req }) => {
        if (value !== req.body.password) {
          return false
        }
         return true;
      }).withMessage('Las contraseñas deben coincidir'),
    body('email').custom(function(value){
        db.User.findAll()
        .then(function(users){
            for(let i=0; i<users.length; i++){
               if(users[i].email == value){
                    return  false;
                }
            } 
        })
            return true
       
    }).withMessage('Usuario ya registrado')
]


module.exports = signupMiddleware

