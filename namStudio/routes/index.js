let express = require('express');
let router = express.Router();
let indexController = require ('../controllers/indexController.js')
let cartController = require ('../controllers/cartController.js')
/* GET home page. */
router.get('/', indexController.index);

router.get('/quienes', indexController.quienes);

router.get('/contacto', indexController.contacto);

module.exports = router;
