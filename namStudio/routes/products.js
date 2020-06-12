let express = require('express');
let router = express.Router();
let productsController = require ('../controllers/productsController.js')
let productMiddleware = require ('../middlewares/productMiddleware')
let productValidator = require('../middlewares/validators/productValidator')
const multer = require ('multer')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'data/cws')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

/* GET todos los productos. */
router.get('/', productsController.collection);

/* GET formulario de carga de producto */
router.get('/cargaProducto',  productsController.cargaProducto);

/* POST  carga de producto */
router.post('/cargaProducto', productMiddleware, productValidator, upload.any(), productsController.create);

/* GET carrito de productos. */
router.get('/carrito', productsController.carrito);

/* GET Detalle de producto. */
router.get('/:id', productsController.idProduct);

module.exports = router;