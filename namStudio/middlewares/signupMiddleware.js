const express = require ('express')
const {check, validationResult, body} = require ('express-validator')

function signupMiddleware (req, res, next){
 
    let errors = validationResult(req)
    if (errors.isEmpty()){
		next()
}else{
	return res.render('signup',{errors: errors.errors})
}
}

    

module.exports =  signupMiddleware