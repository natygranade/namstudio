let express = require('express');
let router = express.Router();
let cartController = require ('../controllers/cartController')


router.get('/', cartController.cart)

router.post('/', cartController.add)

router.delete('/', cartController.remove)


module.exports = router