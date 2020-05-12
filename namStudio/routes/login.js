let express = require('express');
let router = express.Router();
let loginController = require ('../controllers/loginController.js')
/* GET login page. */
router.get('/login', loginController.login);

module.exports = router;
