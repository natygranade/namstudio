let express = require('express')
let router = express.Router()
let apiProductsController = require ('../../controllers/apiProductsController')

router.get ('/', apiProductsController.list)

router.get('/categories', apiProductsController.categories)

module.exports = router