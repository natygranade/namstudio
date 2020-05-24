const fs= require ('fs')
const multer = require ('multer')
const path = require('path')


let productsController= {
    collection: function(req,res){
        res.render('collection')
    },
    cargaProducto:  function(req,res,next){
        res.render('cargaProducto')
    },
    create: function (req,res,next){
                
        let product = {
            idArticle: req.body.idArticle,
            design: req.body.design,
            detail: req.body.detail,
            categories: req.body.categories,
            colorways: req.files[0].filename,
            exclusive: req.body.exclusive
        }
                  
            let products;
            let productsFile = fs.readFileSync (path.resolve('data','products', 'products.json'), {encoding: 'utf-8'})
            if(productsFile == ''){
                products = []
            } else{
                products = JSON.parse(productsFile)
            }
            products.push(product)
            fs.writeFileSync(path.resolve('data','products', 'products.json'),JSON.stringify(products))
           
             res.redirect('cargaProducto')
        },
        carrito:  function(req,res){
            res.render('carrito')
        },
        idProduct: function (req, res, next) {
            res.render('idProduct',{id:req.params.id})
            
        }
    }
    
    module.exports = productsController;