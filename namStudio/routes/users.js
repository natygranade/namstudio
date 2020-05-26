var express = require('express');
var router = express.Router();

let usersController = require ('../controllers/usersController.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET login page. */
router.get('/login', usersController.login);

router.post('/login', usersController.processLogin);

router.get('/signup', usersController.signup);

router.post('/signup', usersController.create);

router.patch('/signup', usersController.edit);

router.delete('/signup', usersController.delete);


module.exports = router;
