var express = require('express');
var router = express.Router();
let usersController = require ('../controllers/usersController')
let productsController = require ('../controllers/productsController')
let productValidator = require('../middlewares/productValidator')
let signupMiddleware = require('../middlewares/signupMiddleware')

const multer = require ('multer')
const path = require('path')
let db = require('../db/models')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'data/avatar')
  },
  filename: function (req, file, cb) {

    cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
  }
})
var upload = multer({ storage: storage })

var storageProduct = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'data/cws')
    },
    filename: function (req, file, cb) {
  
      cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
  })  
var uploadProduct = multer({ storage: storageProduct})

router.get('/', async function(req,res,next){
    let users = await db.User.findAll()
    let products =  db.Product.findAll()
    
    Promise.all([users, products])
    .then(function([users, products]){
          return  res.render('dashboard', {users:users, products:products})
        })
        .catch(error=> console.log(error))
    })

router.get('/newAdmin', usersController.admin);

router.post('/newAdmin', upload.any(),signupMiddleware, usersController.createAdmin);

router.get('/editUser/:id', usersController.edit);

router.patch('/editUser/:id', upload.any(), usersController.update);

router.delete('/editUser/:id', usersController.delete);

router.get('/cargaProducto',  productsController.cargaProducto);

router.post('/cargaProducto', uploadProduct.any(),productValidator,  productsController.create);

router.get('/editProduct/:id', productsController.edit)

router.patch('/editProduct/:id', uploadProduct.any(), productsController.update) 

router.delete('/editProduct/:id', productsController.destroy)



module.exports = router;