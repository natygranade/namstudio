let express = require('express');
let db = require('../db/models')

let apiUsersController = {
    list: function (req,res){
        db.User.findAll()
        .then(response =>{
            res.json(response)
        })
    },
    detail: function(req,res){
        db.User.findByPk(req.session.userLoged)
        .then( user => res.json(user))
    }
}

module.exports = apiUsersController