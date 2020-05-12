let usersController= {
    signUp: function( req, res){
        res.render('signUp')
    },
    logIn: function( req, res){
        res.render('logIn')
    }
}

module.exports = usersController;