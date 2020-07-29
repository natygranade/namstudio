let indexController= {
    index: function( req, res){
        res.render('index')
    },
    aboutUs: function( req, res){
        res.render('aboutUs')
    },
    
    contact: function( req, res){
        res.render('contact')
    },
    
}

module.exports = indexController;