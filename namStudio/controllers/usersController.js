const fs= require ('fs')
const path = require('path')
const session= require('express-session')
const bcrypt = require('bcrypt')

let usersController= {
    signUp: function( req, res){
        res.render('signUp')
    },
    logIn: function( req, res){
        res.render('logIn')
    },
    processSignup:   function (req,res,next){
        let user = {
            email:req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            password: bcrypt.hashSync(req.body.password, 10),
            terms: req.body.terms
        }
        
        let users;
        let usersFile = fs.readFileSync (path.resolve('data','users', 'users.json'), {encoding: 'utf-8'})
        if(usersFile == ''){
            users = []
        } else{
            users = JSON.parse(usersFile)
        }
        users.push(user)
        fs.writeFileSync(path.resolve('data','users', 'users.json'),JSON.stringify(users))
        
        res.redirect('/')
        
    },
    processLogin: function (req,res,next){
        
        let user = {
            email:req.body.email,
            password: req.body.password,
            rememberMe: req.body.rememberMe
        }
        let userToLog; 
        let users;
        let usersFile = fs.readFileSync (path.resolve('data','users', 'users.json'), {encoding: 'utf-8'})
        if(usersFile == ''){
            users = []
        } else{
            users = JSON.parse(usersFile)
        }
        for (let i=0; i<users.length; i++){
            if(users[i].email == req.body.email){
                if(bcrypt.compareSync(req.body.password, users[i].password)){
                    userToLog = users[i]
                    break;
                }
            }
        }
        if(userToLog == undefined){
            return res.render('logIn', {errors: [{msg: "Usuario no registrado"}]})
        }
        req.session.Loged = userToLog

        res.send('usuario logeado')
        
    }
}
    
    module.exports = usersController;