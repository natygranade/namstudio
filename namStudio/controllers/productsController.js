let productsController= {
   collection: function(req,res){
res.render('collection')
   },
    idProduct: function( req, res){
        res.render('idProduct',{id:req.params.idProduct})
    }
}

module.exports = productsController;