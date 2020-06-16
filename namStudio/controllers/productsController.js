const fs= require ('fs')
const multer = require ('multer')
let express = require('express');
const path = require('path')
let db = require('../db/models')
const { Op } = require("sequelize");
const {check, validationResult, body} = require ('express-validator')

let productsController= {
    collection: function(req,res){
        db.Product.findAll()
        .then(products=>{
            res.render('/', {products:products})
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
            colorways: [req.files[0].filename, req.files[1].filename,req.files[2].filename], 
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
    idProduct: function (req, res, next) {
        res.render('idProduct',{id:req.params.id})
        
    }
}

module.exports = productsController;