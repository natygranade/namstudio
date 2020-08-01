const session= require('express-session')
let db = require('../db/models')

module.exports =  function (req,res,next){
    if(req.session.newCart == undefined){
   db.Cart.create()
    .then(newCart =>{
       
        req.session.newCart = newCart.id
        next()
    })
   }else{
       next()
   }
}


