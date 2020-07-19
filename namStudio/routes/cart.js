let express = require('express');
let router = express.Router();
let cartController = require ('../controllers/cartController')


router.get('/', cartController.cart)






module.exports = router