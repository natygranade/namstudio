let productsController= {
    collection: function(req,res){
        res.render('collection')
    },
    cargaProducto:  function(req,res){
        res.render('cargaProducto')
    },
    idProduct: function (req, res, next) {
        res.render('idProduct',{id:req.params.id})
    
    }
}

module.exports = productsController;