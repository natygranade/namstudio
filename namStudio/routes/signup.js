let express = require('express');
let router = express.Router();
let signupController = require ('../controllers/signupController.js')
/* GET signup page. */
router.get('/signup', signupController.signup);

module.exports = router;