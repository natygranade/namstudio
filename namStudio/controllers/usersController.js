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
                adress: req.body.adress,
                country: req.body.country,
                phone: req.body.phone,
                avatar: req.files[0].filename,
                terms: req.body.terms,
                admin: req.body.admin
            })
            
            
            res.redirect('/')
        }else{
            return res.render('signup',{errors: errors.errors})
        }
    },
    processLogin: function (req,res){
        let errors = validationResult(req)
        if (errors.isEmpty()){
            
            
            let userToLog = db.User.findAll({
                where: {
                    email: req.body.email,
                    
                }
                .then (function(userToLog){
                    
                    if (userToLog) {
                        
                        let valid = bcrypt.compareSync(req.body.password, userToLog.password)
                        
                        if (valid) {
                            req.session.userLoged = userToLog.email
                            
                            return res.render('index')
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
                adress: req.body.adress,
                country: req.body.country,
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
        
        delete: function (req,res,next){
            db.User.findByPk(req.params.id)
            .then(user =>{
                fs.unlink(`./data/avatar/${user.avatar}`, (err) => {
                    if (err) throw err;
                })
            })
            db.User.destroy({
                where: {
                    id: req.params.id
                }
            })
            
            res.redirect('/users/signup')
            
        },
        admin: function (req,res){
            res.render('newAdmin')
        },
        createAdmin:  function (req,res, next){
            let errors = validationResult(req)
            console.log(errors)
            if (errors.isEmpty()){
                
                db.User.create({
                    
                    full_name: req.body.name,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    adress: req.body.adress,
                    country: req.body.country,
                    phone: req.body.phone,
                    avatar: req.files[0].filename,
                    terms: req.body.terms,
                    admin: req.body.admin
                })
                
                return  res.redirect('/dashboard')
            }else{
                return res.render('newAdmin',{errors: errors.errors})
            }

        } 
    }
    
    module.exports = usersController;