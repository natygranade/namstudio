let db = require('../db/models')

let indexController= {
    index: function( req, res){
        res.render('index')
    },

    search: function( req, res){
        db.Product.findAll({
            include: ['category']
        })
       .then(result => {
        let productResult= []   
        for(let i = 0; i<result.lenght; i++) {
            console.log(result[i].category)
            if(result[i].category.includes(req.query.search)){
                productResult.push(result[i])
            }
        }
        
       })


        res.render('search')
    },

    aboutUs: function( req, res){
        res.render('aboutUs')
    },
    
    contact: function( req, res){
        res.render('contact')
    },
    
}

module.exports = indexController;