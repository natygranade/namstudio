let express = require('express');
let router = express.Router();
let productsController = require ('../controllers/productsController.js')

/* GET todos los productos. */
router.get('/', productsController.collection);

/* GET Detalle de producto. */
router.get('/collection/:idProduct', productsController.idProduct);

module.exports = router;