const fs= require ('fs')
let express = require('express');
let db = require('../db/models')


let cartController= {
    cart: function(req, res){
        db.Cart.findOne({
            include: ['products'],
            where:{
                id: req.session.newCart
            }
        }).then( cart => {
            
            if(cart){
                return res.render('cart', {cart:cart})
            }
        })
        .catch(function(error){
            console.log(error)
        })
    },
    add: async function(req,res){
        await db.Cart.findOne({
            include: ['products'],
            where:{
                id:  req.session.newCart }
            }).then( cart => {
                cart.addProduct(req.body.product_id)
                res.json(cart)
            })
        },
        
        remove: async function(req,res){
            await db.Cart.findOne({
                include: ['products'],
                where:{
                    id: req.session.newCart
                }               
            }).then( cart => {
                cart.removeProduct(req.body.product_id)
                res.json(cart)
            })
        }
    }
    
    module.exports = cartController;
    
    
    