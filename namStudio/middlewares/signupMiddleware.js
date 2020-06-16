const {check, validationResult, body} = require ('express-validator')
const fs= require ('fs')
const path = require('path')

let signupMiddleware = [
    check ('email').isEmail().withMessage('Completar mail'),
    check('name').isLength({min:1}).withMessage('Completar nombre y apellido'),
    check ('password').isLength({min: 4, max:8}).withMessage('Completar contraseña'),
    body('email').custom(function(value){
  
        let users;
        let usersFile = fs.readFileSync (path.resolve('data','users', 'users.json'), {encoding: 'utf-8'})
        if(usersFile == ''){
            users = []
        } else{
            users = JSON.parse(usersFile)
        }
        for(let i =0; i <users.length;i++){
            if(users[i].email == value){
                return false;
            }
        }
        return true
    }).withMessage('Usuario ya registrado')
    ]


    module.exports = signupMiddleware