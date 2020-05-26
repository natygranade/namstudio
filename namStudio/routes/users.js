var express = require('express');
var router = express.Router();
let loginMiddleware = require ('../middlewares/signupMiddleware')
let loginValidator = require('../middlewares/validators/signupValidator')
let usersController = require ('../controllers/usersController.js')
let signupMiddleware = require ('../middlewares/signupMiddleware')
let signupValidator = require('../middlewares/validators/signupValidator')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET login page. */
router.get('/logIn', usersController.logIn);

router.get('/signUp', usersController.signUp);

router.post('/signUp', signupValidator, signupMiddleware, usersController.processSignup)

router.post('/logIn', loginValidator, loginMiddleware, usersController.processLogin)

module.exports = router;

