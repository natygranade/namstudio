let express = require('express')
let router = express.Router()
let apiProductsController = require ('../../controllers/apiUsersController')


router.get ('/', apiProductsController.list)

module.exports = router