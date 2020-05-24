const {check, validationResult, body} = require ('express-validator')

let productValidator = [
    check ('idArticle').isInt({min:6, max:6}).withMessage('Completar id de 6 números'),
    check ('design').isLength({min: 10, max:11}).withMessage('Completar nombre de diseño'),
    check ('categories').isLength().withMessage('Seeccionar categoria'),
    check ('colorways').isLength().withMessage('Cargar 3 variantes')
    ]


    module.exports = productValidator