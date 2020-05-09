let productsController= {
    collection: function(req,res){
        res.render('collection')
    },
    idProduct: function (req, res, next) {
        res.render('idProduct',{id:req.params.id})
        
    }
}

module.exports = productsController;