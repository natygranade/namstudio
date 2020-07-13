const {check, validationResult, body} = require ('express-validator')
const fs= require ('fs')
const db = require('../db/models')
const { Op } = require("sequelize");

let signupMiddleware = [
    check ('email').isEmail().withMessage('Completar mail'),
    check('name').isLength({min:1}).withMessage('Completar nombre y apellido'),
    check ('password').isLength({min: 4, max:8}).withMessage('Completar contraseña')
    // body('email').custom(function(value){
    //     db.User.findAll()
    //     .then(users=>{
    //         console.log('here' +users)
    //         for(let i=0; i<users; i++){
    //             if(users[i].email == req.body.email){
    //                 return true;
    //             }else{
    //                 return false
    //             }
    //         } 
    //     })
    // }).withMessage('Usuario ya registrado')
]


module.exports = signupMiddleware