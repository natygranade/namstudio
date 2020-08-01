let db = require('../db/models')
const { Op } = require("sequelize");

let indexController= {
    index: function( req, res){
        res.render('index')
    },

    search: async function( req, res){
       let categories = await db.Category.findAll(

        )
let products = db.Product.findAll({
            include: ['category']
                  })
      Promise.all([categories, products])
       .then(function ([categories,products]) {
         
let categoryResult = ""
let productResult = []
        for(let i = 0; i<products.length; i++) {
 
            if(products[i].detail.includes(req.query.search)){
                 productResult.push(products[i])
            }
        }

        if(productResult.length === 0){
        for(let i = 0; i<categories.length; i++) {
 
            if(categories[i].name.includes(req.query.search.toUpperCase())){
                 categoryResult = categories[i]
                  }
         }
         console.log(categoryResult.id)               
                          for(let i = 0; i<products.length; i++) {
 
                            if(products[i].categoryId === categoryResult.id ){
                                 productResult.push(products[i])
                            }
                        }
                
                        }

        return  res.render('collection',{products:productResult})
       })
       .catch(error => console.log(error))


       
    },

    aboutUs: function( req, res){
        res.render('aboutUs')
    },
    
    contact: function( req, res){
        res.render('contact')
    },
    
}

module.exports = indexController;