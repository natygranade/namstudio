const session= require('express-session')
let db = require('../db/models')

module.exports =  function createCart (req,res,next){
    
   
db.Cart.create()
db.Cart.findOne({
    order: [ [ 'createdAt', 'DESC' ]],
})

.then(newCart =>{
    console.log(newCart.id)
        req.session.newCart = newCart.id

    })
console.log(req.session.newCart)
 next()
}


