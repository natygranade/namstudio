let indexController= {
    index: function( req, res){
        res.render('index')
    },
    
    quienes: function( req, res){
        res.render('quienes')
    },
    
    contacto: function( req, res){
        res.render('contacto')
    },
}

module.exports = indexController;