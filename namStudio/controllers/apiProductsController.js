let express = require('express');
let db = require('../db/models')

let apiProductsCotroller = {
list: function (req,res){
    db.Product.findAll({
        include: ['category']
    })
    .then(response =>{
     
res.json(response)

    })
}
}

module.exports = apiProductsCotroller