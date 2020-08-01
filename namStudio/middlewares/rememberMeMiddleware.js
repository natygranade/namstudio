const session= require('express-session')
let db = require('../db/models')

module.exports =  function (req,res,next){
    
    if(req.cookies.rememberMe != undefined && req.session.userLoged == undefined){
        
        db.User.findAll()
        
        .then( users =>{
            let userToLog =  users.find(user => user.id == req.cookies.rememberMe)
            if(userToLog){
                req.session.userLoged = userToLog
            }
        })
    }
    next()
} 
