let express = require('express');
let router = express.Router();
let productsController = require ('../controllers/productsController.js')
let productValidator = require('../middlewares/validators/productValidator')
const multer = require ('multer')
const path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'data/cws')
    },
    filename: function (req, file, cb) {
      console.log(file)
      cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

/* GET todos los colleccion. */
router.get('/', productsController.collection);

router.get('/dashboard', productsController.dashboard)

/* GET formulario de carga de producto */
router.get('/dashboard/cargaProducto',  productsController.cargaProducto);

/* POST  carga de producto */
router.post('/dashboard/cargaProducto', upload.any(),productValidator,  productsController.create);

/* GET carrito de productos. */
router.get('/carrito', productsController.carrito);

/* GET Detalle de producto. */
router.get('/:id', productsController.idProduct);

router.get('/dashboard/editProduct/:id', productsController.edit)

router.patch('/dashboard/editProduct/:id', productsController.update) 

router.delete('/dashboard/editProduct/:id', productsController.destroy)

module.exports = router;