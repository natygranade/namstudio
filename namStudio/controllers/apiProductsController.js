let express = require('express');
let db = require('../db/models')

let apiProductsCotroller = {
list: function (req,res){
    db.Product.findAll({
        include: ['category']
    })
    .then(products =>{
        for(let i=0;i<products.length;i++){
            products[i].setDataValue( "image_path", "namStudio/data/cws" + products[i].cw1 )
        }
  
res.json(products)

    })
},
categories: function (req,res){
    db.Category.findAll()
    .then(response =>{
            res.json(response)
    })
}
}

module.exports = apiProductsCotroller