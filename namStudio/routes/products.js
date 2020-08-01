let express = require('express');
let router = express.Router();
let productsController = require ('../controllers/productsController')



/* GET todos los colleccion. */
router.get('/', productsController.collection);

router.get('/category',productsController.productsByCategory)

/* GET Detalle de producto. */
router.get('/:id', productsController.idProduct);


module.exports = router;