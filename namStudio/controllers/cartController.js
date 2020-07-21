const fs= require ('fs')
let express = require('express');
let db = require('../db/models')


let cartController= {
    cart:  function( req, res){
        db.Cart.findOne({
            include: ['products'],
            where:{
                user_id: 2
            }
        }).then(result =>{
            console.log(result)
            if(result){
                return res.render('cart', {cart:result})
            }
        })
        .catch(function(error){
            console.log(error)
        })
    },
    add: async function(req,res){
let cart = await db.Cart.findOne({
    where:{
        user_id: 2
    }
})
cart.addProduct(req.body.product_id)
res.json(cart)
}   
}

module.exports = cartController;