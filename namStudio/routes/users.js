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
router.get('/login', usersController.logIn);

router.get('/signup', usersController.signUp);

router.post('/signUp', signupValidator, signupMiddleware, usersController.create)

router.patch('/signup', usersController.edit);

router.delete('/signup', usersController.delete);

router.post('/logIn', loginValidator, loginMiddleware, usersController.processLogin)

module.exports = router;

