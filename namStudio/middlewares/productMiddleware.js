const express = require ('express')
const {check, validationResult, body} = require ('express-validator')

function productMiddleware (req, res, next){
 
    let errors = validationResult(req)
    if (errors.isEmpty()){
		next()
}else{
	return res.render('cargaProducto',{errors: errors.errors})
}
}

    

module.exports =  productMiddleware