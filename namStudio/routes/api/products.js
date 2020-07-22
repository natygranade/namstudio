let express = require('express')
let router = express.Router()
let apiProductsController = require ('../../controllers/apiProductsController')

router.get ('/', apiProductsController.list)



module.exports = router