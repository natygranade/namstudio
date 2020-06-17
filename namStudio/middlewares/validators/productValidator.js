const {check, validationResult, body} = require ('express-validator')

let productValidator = [
    check ('name').isLength({min: 6, max:12}).withMessage('Completar nombre de diseño'),
    check ('category').isLength().withMessage('Seeccionar categoria'),
    check ('colorways').isLength().withMessage('Cargar 3 variantes')
    ]


    module.exports = productValidator