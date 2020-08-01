let express = require('express')
let router = express.Router()
let db = require('../../db/models')

router.get ('/',  function(req,res){
    db.Cart.findOne({
        include: ['products'],
        where:{
            id: req.session.newCart
        }
    }).then( cart => {
        res.json(cart)
    }) 
})

router.get('/products', function(req,res){
    
    db.Cart.findOne({
        include: ['products'],
        where:{
            id: req.session.newCart
        }
    }).then( cart => {
        res.json(cart.products)
    })
    
})


module.exports = router
