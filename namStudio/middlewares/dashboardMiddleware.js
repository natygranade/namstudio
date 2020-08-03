let express = require('express');
let db = require('../db/models')

function dashboardMiddleware(req,res,next){
    db.User.findByPk(req.session.userLoged)
    
    .then (function(user){
 if(user){
        if(user.admin){
            next()
            
        } else{
        
        res.redirect('/users/login')
        }
    }else{
         res.redirect('/users/login')
    }
    })  
    
    .catch(err =>console.log(err))
    
}
module.exports = dashboardMiddleware

