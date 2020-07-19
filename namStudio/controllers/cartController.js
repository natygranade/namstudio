const fs= require ('fs')
let express = require('express');
let db = require('../db/models')


let cartController= {
    cart: function( req, res){
db.Cart.findAll({
    where:{
        user_id: req.session.userLoged
    }
}).then(results =>{
    res.render('cart', {results:results})
})
        res.render('cart')
    },

}

module.exports = cartController;