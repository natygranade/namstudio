const fs= require ('fs')
const multer = require ('multer')
let express = require('express');
const path = require('path')
let db = require('../db/models')
const { Op } = require("sequelize");
const {check, validationResult, body} = require ('express-validator');


let productsController= {
    collection: async function(req,res,next){
        let cart = await db.Cart.findOne({
            where:{
                user_id: 4
            }
        })
        let products = db.Product.findAll()
        Promise.all([cart, products])
        .then(function ([cart, products]){
            return  res.render('collection', {products:products,  cart:cart})
        })
        .catch(error=>{
            console.log(error)
        })
    },
    cargaProducto: function(req,res,next){
        db.Category.findAll()
        .then(categories=>{
            return  res.render('cargaProducto', {categories:categories})
        })
        
    },
    productsByCategory: async function( req, res){
        let categories = await db.Category.findAll(
            
            )
            let products = db.Product.findAll({
                include: ['category']
            })
            Promise.all([categories, products])
            .then(function ([categories,products]) {
                
                let categoryResult = ""
                let productResult = []
                for(let i = 0; i<categories.length; i++) {
                    
                    if(categories[i].name.includes(req.query.category)){
                        categoryResult = categories[i]
                    }
                }
                
                for(let i = 0; i<products.length; i++) {
                    
                    if(products[i].categoryId === categoryResult.id ){
                        productResult.push(products[i])
                    }
                }
                
                return  res.render('collection',{products:productResult})
            })
            .catch(error => console.log(error))
            
        },
        create: function (req,res,next){
            let errors = validationResult(req)
            
            if (errors.isEmpty()){
                let files1 =  req.files[0]
                let files2 = req.files[1]
                let files3 =  req.files[2]
              
    if(files1 !== undefined && files2 !== undefined && files3 !== undefined){
    files10 = files1.filename
    files20 = files2.filename
    files30 = files3.filename
       
    } else{
        files10 = "no image "
        files20 = "no image "
        files30 = "no image "
    }     
                db.Product.create({
                    id: req.body.id,
                    name: req.body.name,
                    detail: req.body.detail,
                    category_id: req.body.categories,
                    cw1: files10,
                    cw2: files20,
                    cw3: files30, 
                    exclusive: req.body.exclusive,
                    size: req.body.size,
                    price: req.body.price
                })
                
                res.redirect('/dashboard/cargaProducto')
            }else{
                db.Category.findAll()
                .then(categories=>{
                    return  res.render('cargaProducto', {categories:categories, errors: errors.errors})
                })
                
            }
        },
        carrito:  function(req,res){
            res.render('carrito')
        },
        idProduct: async function (req, res, next) {
            let idProduct = await db.Product.findByPk(req.params.id,{
                include: [{
                    association:"category"}]
                })
                
                let similars =  db.Product.findAll({
                    include: [{
                        association:"category"}],
                        where : {category_id :  idProduct.category_id } 
                        
                    })
                    Promise.all([idProduct, similars])
                    .then( function([idProduct, similars]){
                        
                        return  res.render('idProduct',{product: idProduct, similar: similars })
                    })  
                    .catch(error=>{
                        console.log(error)
                    })
                },
                
                edit: function(req,res, next){
                    let product = db.Product.findByPk(req.params.id,{
                        include: [{
                            association:"category"}]
                        })
                        
                        let categories = db.Category.findAll()
                        Promise.all([product, categories])
                        .then(function([product, categories]){
                            
                            return res.render('editProduct', {product:product,categories:categories})
                        })
                        .catch(function(error){
                            console.log(error)
                            
                        })
                    },
                    update: function(req,res, next){
                        let files1 =  req.files[0]
                        let files2 = req.files[1]
                        let files3 =  req.files[2]
                      
            if(files1 !== undefined && files2 !== undefined && files3 !== undefined){
            files10 = files1.filename
            files20 = files2.filename
            files30 = files3.filename
               
            } else{
                files10 = "no image"
                files20 = "no image"
                files30 = "no image"
            }    
                        db.Product.update({
                            
                            name: req.body.name,
                            detail: req.body.detail,
                            category_id: req.body.category,
                            cw1: files10,
                            cw2: files20,
                            cw3: files30, 
                            exclusive: req.body.exclusive,
                            size: req.body.size,
                            price: req.body.price
                        },{
                            where:{
                                id: req.params.id
                            }
                        })
                        
                        res.redirect('/dashboard')
                    },
                    destroy: (req,res)=>{
                        db.Product.findByPk(req.params.id,{
                            include: [{
                                association:"category"}]
                            })
                            .then(product =>{
                                fs.unlink(`./data/cws/${product.cw1}`, (err) => {
                                    if (err) throw err;
                                })
                                fs.unlink(`./data/cws/${product.cw2}`, (err) => {
                                    if (err) throw err;
                                })
                                fs.unlink(`./data/cws/${product.cw3}`, (err) => {
                                    if (err) throw err;
                                })
                            } )
                            db.Product.destroy({
                                where:{
                                    id: req.params.id
                                }
                            });
                            
                            res.redirect('/dashboard')
                        }
                    }
                    
                    module.exports = productsController;