const {check, validationResult, body} = require ('express-validator')

let productValidator = [
    check ('name').isLength({min:0, max: undefined}).withMessage('Completar nombre de diseño'),
      check ('colorways').isLength({min:0, max: undefined}).withMessage('Cargar 3 variantes'),
      check ('size').isLength({min: 0, max: 7}).withMessage('La medida debe ser alto x ancho en cm')
    //   check ('price').isInt({min: 2, max:undefined}).withMessage('Completar precio en USD')
    ]


    module.exports = productValidator