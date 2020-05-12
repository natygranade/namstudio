let express = require('express');
let router = express.Router();
let productsController = require ('../controllers/productsController.js')

/* GET todos los productos. */
router.get('/', productsController.collection);

/* GET formulario de carga de producto */
router.get('/cargaProducto', productsController.cargaProducto);

/* GET carrito de productos. */
router.get('/carrito', productsController.carrito);

/* GET Detalle de producto. */
router.get('/:id', productsController.idProduct);

module.exports = router;