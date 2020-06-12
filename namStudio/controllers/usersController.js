const fs= require ('fs')
const path = require('path')
const bcrypt = require('bcrypt')
const {check, validationResult, body} = require ('express-validator')

let usersController= {
    signup: function( req, res, next){
        res.render('signup')
    },
    login: function( req, res){
        res.render('login')
    },
    create:  function (req,res){
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
    processLogin: function (req,res){
        let errors = validationResult(req)
        if (errors.isEmpty()){
            
            let usersFile = fs.readFileSync(path.resolve('data','users', 'users.json'), {encoding: 'utf-8'})
            let users ;
            if (usersFile == ''){
                users = []  
            }else{
                users = JSON.parse(usersFile)
            }  
            let userToLog = users.find(user => user.email == req.body.email)
            
            if (userToLog) {
                let valid = bcrypt.compareSync(req.body.password, userToLog.password)
                
                if (valid) {
                    req.session.userLoged = userToLog.email
                    console.log('login', req.session)
                    return res.send('logueado '+ req.session.userLoged )
                } else {
                    return res.render('login', {errors: [{msg:'contrasena invalida'}]}) 
                }
            } 
            
        }else{
            return res.render('login',{errors: errors.errors})
        }
        
    },
    check: function (req,res){
        console.log(req.session)
        if(req.session.userLoged){
        res.send(req.session.userLoged)
        } else{
            res.send("no logueado")
        }
    },
    edit: function (req,res){
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
        
    },
    
    
}

module.exports = usersController;