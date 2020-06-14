const fs = require ('fs')
const session= require('express-session')

module.exports =  function rememberMeMiddleware (req,res,next){
    
    if(req.cookies.rememberMe != undefined && req.session.userLoged == undefined){
        let users ;
        let usersFile = fs.readFileSync(path.resolve('data','users', 'users.json'), {encoding: 'utf-8'})
        if (usersFile == ''){
            users = []  
        }else{
            users = JSON.parse(usersFile)
        }  
        
        let userToLog = users.find(user => user.email == req.cookies.rememberMe)
        
        if (userToLog) {
            req.session.userLoged = userToLog
         
        }
    }
    next()
} 
