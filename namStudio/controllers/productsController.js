const fs= require ('fs')
const multer = require ('multer')
let express = require('express');
const path = require('path')
let db = require('../db/models')
const { Op } = require("sequelize");
const {check, validationResult, body} = require ('express-validator')

let productsController= {
    collection: function(req,res,next){
        db.Product.findAll()
        .then(products=>{
            res.render('collection', {products:products})
        })
    },
    cargaProducto:  function(req,res,next){
        db.Category.findAll()
        .then(categories=>{
            res.render('cargaProducto', {categories:categories})
        })
        
    },
    create: function (req,res,next){
        let errors = validationResult(req)
        
        if (errors.isEmpty()){
            
            db.Product.create({
                id: req.body.id,
                name: req.body.name,
                detail: req.body.detail,
                category_id: req.body.category,
                cw1: req.files[0].filename,
                cw2: req.files[1].filename,
                cw3: req.files[2].filename, 
                exclusive: req.body.exclusive,
                size: req.body.size,
                price: req.body.price
            })
            
            res.redirect('cargaProducto')
        }else{
            return res.render('cargaProducto',{errors: errors.errors})
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
        dashboard: function(req,res,next){
            db.Product.findAll()
            .then(products=>{
                res.render('dashboard', {products:products})
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
        update: function(req,res){
            db.Product.update({
                name: req.body.name,
                detail: req.body.detail,
                category_id: req.body.category,
                cw1: req.files[0].filename,
                cw2: req.files[1].filename,
                cw3: req.files[2].filename, 
                exclusive: req.body.exclusive,
                size: req.body.size,
                price: req.body.price
            },{
                where:{
                    id: req.params.id
                }
            })
            res.redirect('/collection')
        },
        destroy: (req,res)=>{
            db.Product.destroy({
                where:{
                    id: req.params.id
                }
            })
        }
    }
    
    module.exports = productsController;