var express = require('express');
var router = express.Router();
let usersController = require ('../controllers/usersController.js')
let loginMiddleware = require ('../middlewares/loginMiddleware')
let signupMiddleware = require('../middlewares/signupMiddleware')
const multer = require ('multer')
const path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'data/avatar')
  },
  filename: function (req, file, cb) {

    cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/signup', usersController.signup);

router.post('/signup',upload.any(), signupMiddleware,  usersController.create);

router.get('/login', usersController.login);

router.post('/login',loginMiddleware, usersController.processLogin)

router.get('/check', usersController.check)

router.patch('/signup', usersController.edit);

router.delete('/signup', usersController.delete);

module.exports = router;

