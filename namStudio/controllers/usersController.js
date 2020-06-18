const fs= require ('fs')
const path = require('path')
let express = require('express');
const bcrypt = require('bcrypt')
const {check, validationResult, body} = require ('express-validator')
let db = require('../db/models')
const { Op } = require("sequelize");


let usersController= {
    signup: function( req, res, next){
        res.render('signup')
    },
    login: function( req, res){
        res.render('login')
    },
    create:  function (req,res, next){
        let errors = validationResult(req)

        if (errors.isEmpty()){

        db.User.create({
        
            full_name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,
            avatar: req.files[0].filename,
            terms: req.body.terms
        })

            /*let users;
            let usersFile = fs.readFileSync (path.resolve('data','users', 'users.json'), {encoding: 'utf-8'})
            if(usersFile == ''){
                users = []
            } else{
                users = JSON.parse(usersFile)
            }
            users.push(user)
            fs.writeFileSync(path.resolve('data','users', 'users.json'),JSON.stringify(users))*/
        
        res.redirect('/')
        }else{
	return res.render('signup',{errors: errors.errors})
}
    },
    processLogin: function (req,res){
        let errors = validationResult(req)
        if (errors.isEmpty()){
            
            /*let usersFile = fs.readFileSync(path.resolve('data','users', 'users.json'), {encoding: 'utf-8'})
            let users ;
            if (usersFile == ''){
                users = []  
            }else{
                users = JSON.parse(usersFile)
            }
            let userToLog = users.find(user => user.email == req.body.email)*/

            let userToLog = db.User.findAll({
                where: {
                    email: req.body.email
                }
                .then (function(userToLog){
                
                if (userToLog) {
                
                    let valid = bcrypt.compareSync(req.body.password, userToLog.password)
                
                    if (valid) {
                        req.session.userLoged = userToLog.email
                 
                    return res.send('logueado '+ req.session.userLoged )
                } else {
                    return res.render('login', {errors: [{msg:'contrasena invalida'}]}) 
                }
                } 
                })
            })
        }
        else{
            return res.render('login',{errors: errors.errors})
        }
    
    },
    check: function (req,res){
      
        if(req.session.userLoged){
        res.send(req.session.userLoged)
        } else{
            res.send("no logueado")
        }
    },

    edit: function (req,res){
        
        db.User.findByPk(req.params.id)
        .then(function(User){
            res.render('userEdit', {user:user});
        }
        )},

    update: function (req, res){
        db.User.update({

            full_name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,
            avatar: req.files[0].filename,
            terms: req.body.terms

        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/users/edit/' + req.params.id)
    },
        
        /*let users;    
        let editUser = users.findIndex(function (user) {
            return user.id == req.params.id
        })
        users[editUser].email = req.body.email,
        users[editUser].password = req.body.password,
        users[editUser].nombre = req.body.name,
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
    },*/

    delete: function (req,res,next){
        
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
        /*let index = users.findIndex(function (user) {
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
        fs.appendFileSync(path.resolve('data', 'users', 'users.json'), JSON.stringify(users))*/
        
        res.redirect('/users/signup')
        
    },
       
}

module.exports = usersController;