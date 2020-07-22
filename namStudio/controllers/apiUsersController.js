let express = require('express');
let db = require('../db/models')

let apiUsersCotroller = {
    list: function (req,res){
        db.User.findAll()
        .then(response =>{
            res.json(response)
        })
    }
}

module.exports = apiUsersCotroller