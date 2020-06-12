var express = require('express');
var router = express.Router();
let usersController = require ('../controllers/usersController.js')
let loginMiddleware = require ('../middlewares/loginMiddleware')

let signupMiddleware = require ('../middlewares/signupMiddleware')
let signupValidator = require('../middlewares/validators/signupValidator')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/signup', usersController.signup);

router.post('/signup', signupMiddleware,signupValidator,  usersController.create)

router.get('/login', usersController.login);

router.post('/login',loginMiddleware, usersController.processLogin)

router.get('/check', usersController.check )

router.patch('/signup', usersController.edit);

router.delete('/signup', usersController.delete);

module.exports = router;

