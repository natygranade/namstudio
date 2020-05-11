let express = require('express');
let router = express.Router();
let productsController = require ('../controllers/productsController.js')

/* GET todos los productos. */
router.get('/', productsController.collection);


router.get('/cargaProducto', productsController.cargaProducto);

/* GET Detalle de producto. */

router.get('/:id', productsController.idProduct);

module.exports = router;