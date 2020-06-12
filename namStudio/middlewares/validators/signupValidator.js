const {check, validationResult, body} = require ('express-validator')

let signupValidator = [
    check ('email').isEmail().withMessage('Completar mail'),
    check('name').isLength().withMessage('Completar nombre y apellido'),
    check ('password').isLength({min: 4, max:8}).withMessage('Completar contraseña')
    ]


    module.exports = signupValidator