let express = require('express');
let router = express.Router();
let indexController = require ('../controllers/indexController.js')
let cartController = require ('../controllers/cartController.js')
/* GET home page. */
router.get('/', indexController.index);

router.get('/', indexController.search);

router.get('/aboutUs', indexController.aboutUs);

router.get('/contact', indexController.contact);

module.exports = router;
