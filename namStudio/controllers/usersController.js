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
    create:   function (req,res,next){
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
    },
    edit: function (req,res,next){
            let users;    
            let editUser = users.findIndex(function (user) {
                return user.id == req.params.id
            })
                users[editUser].email = req.body.email,
                users[editUser].contraseña = req.body.contraseña,
                users[editUser].nombre = req.body.nombre,
                users[editUser].razon = req.body.razon,
                users[editUser].provincia = req.body.provincia,
                users[editUser].codPos = req.body.codPos,
                users[editUser].telefono = req.body.telefono;
            
                      
                let usersJson = fs.readFileSync (path.resolve('data','users', 'users.json'), {encoding: 'utf-8'})
                if(usersJson == ''){
                    users = []
                } else{
                    users = JSON.parse(usersJson)
                }
                fs.appendFileSync(path.resolve('data','users', 'users.json'),JSON.stringify(users))
               
                res.status(200).send('')
            },
    delete: function (req,res,next){
                
                let index = users.findIndex(function (user) {
                return user.id == req.params.id
                })
                delete users[index]
                res.status(200).send('Ok')
                let users;
                let usersJson = fs.readFileSync(path.resolve('data', 'users', 'users.json'), { encoding: 'utf-8' })
                if (usersJson == '') {
                users = []
                } else {
                users = JSON.parse(usersJson)
            }
                fs.appendFileSync(path.resolve('data', 'users', 'users.json'), JSON.stringify(users))

        res.redirect('index')
                   
    }
}
    
    module.exports = usersController;