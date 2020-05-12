var express = require('express');
var router = express.Router();

let usersController = require ('../controllers/usersController.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET login page. */
router.get('/logIn', usersController.logIn);

router.get('/signUp', usersController.signUp);



module.exports = router;
