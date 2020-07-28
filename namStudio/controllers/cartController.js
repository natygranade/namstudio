const fs= require ('fs')
let express = require('express');
let db = require('../db/models')


let cartController= {
    cart: function(req, res){
        db.Cart.findAll({
            include: ['products'],
            where:{
                user_id: 2,
                //  user_id: req.session.userLoged
            }
            
        }).then( response => {
            let carts = Array.from(response)
            let lastCart = carts[carts.length-1]
            
            if(lastCart){
                return res.render('cart', {cart:lastCart})
            }
        })
        .catch(function(error){
            console.log(error)
        })
    },
    add: async function(req,res){
        await db.Cart.findAll({
            include: ['products'],
            where:{
                user_id: 2,
                //  user_id: req.session.userLoged
            }
            
        }).then( response => {
            let carts = Array.from(response)
            let lastCart = carts[carts.length-1]
            
            lastCart.addProduct(req.body.product_id)
            res.json(lastCart)
        })
    },
    
    remove: async function(req,res){
        await db.Cart.findAll({
            include: ['products'],
            where:{
                user_id: 2,
                //  user_id: req.session.userLoged
            }
            
        }).then( response => {
            let carts = Array.from(response)
            let lastCart = carts[carts.length-1]

            lastCart.removeProduct(req.body.product_id)
            res.json(lastCart)
        })
    }
}

module.exports = cartController;


