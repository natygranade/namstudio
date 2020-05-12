let express = require('express');
let router = express.Router();
let carritoController = require ('../controllers/carritoController.js')
/* GET carrito page. */
router.get('/carrito', carritoController.carrito);

module.exports = router;