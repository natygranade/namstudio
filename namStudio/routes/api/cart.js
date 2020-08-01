let express = require('express')
let router = express.Router()
let db = require('../../db/models')

router.get ('/',  function(req,res){
    db.Cart.findAll({
        include: ['products'],
        where:{
            user_id: 4
 //  user_id: req.session.userLoged
           }
}).then( response => {
let carts = Array.from(response)

        res.json(carts[carts.length-1])
})

})

router.get('/products', function(req,res){

    db.Cart.findAll({
        include: ['products'],
        where:{
            user_id: 4,
 //  user_id: req.session.userLoged
        }

        }).then( response => {
            let carts = Array.from(response)
            let lastCart = carts[carts.length-1]
            res.json(lastCart.products)
        })

        })


module.exports = router
