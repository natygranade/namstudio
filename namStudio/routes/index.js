let express = require('express');
let router = express.Router();
let indexController = require ('../controllers/indexController.js')
let cartController = require ('../controllers/cartController.js')
/* GET home page. */
router.get('/', indexController.index);



module.exports = router;
