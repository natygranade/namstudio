let fs = require('fs');
const { check, validationResult, body } = require('express-validator'); 

let usersController = {
     
    
    login: function( req, res){
        res.render('login')
    },
    processLogin: function( req, res){
        let errors = validationResult (req);
        if (errors.isEmpty ()) {

            let users;
            let usersJson = fs.readFileSync ('./data/users/users.json', {encoding: 'utf-8'})
            if(usersJson == ''){
                users = []
            } else {
                users = JSON.parse(usersJson)
            }
            for (let i = 0; i < users.length; i++){
                if (users[i].email == req.body.email) {
                    let userLogIn = users[i];
                }
            }
        } else {
            return res.render ('login', {errors: errors.errors});
        }
        res.render('login')
    },

    signup: function (req, res){
        res.render('signup')
    },

    create: function (req,res){
         let user = {
            id: req.body.id,
            email: req.body.email,
            contraseña: req.body.contraseña,
            nombre: req.body.nombre,
            razon: req.body.razon,
            provincia: req.body.provincia,
            codPos: req.body.codPos,
            telefono: req.body.telefono,
            }
            let users;
            let usersJson = fs.readFileSync ('./data/users/users.json', {encoding: 'utf-8'})
            if(usersJson == ''){
                users = []
            } else{
                users = JSON.parse(usersJson)
            }
            users.push(user);
            usersJson = JSON.stringify(users);
            fs.writeFileSync('./data/users/users.json', usersJson)
           
             res.redirect('/')
        },
    edit: function (req,res,next){
            let users;    
            let editUser = users.findIndex(function (user) {
                return user.id == req.params.id
            })
                users[editUser].email = req.body.email,
                users[editUser].contraseña = req.body.contraseña,
                users[editUser].nombre = req.body.nombre,
                users[editUser].razon = req.body.razon,
                users[editUser].provincia = req.body.provincia,
                users[editUser].codPos = req.body.codPos,
                users[editUser].telefono = req.body.telefono;
            
                      
                let usersJson = fs.readFileSync (path.resolve('data','users', 'users.json'), {encoding: 'utf-8'})
                if(usersJson == ''){
                    users = []
                } else{
                    users = JSON.parse(usersJson)
                }
                fs.appendFileSync(path.resolve('data','users', 'users.json'),JSON.stringify(users))
               
                res.status(200).send('')
            },
    delete: function (req,res,next){
                
                let index = users.findIndex(function (user) {
                return user.id == req.params.id
                })
                delete users[index]
                res.status(200).send('Ok')
                let users;
                let usersJson = fs.readFileSync(path.resolve('data', 'users', 'users.json'), { encoding: 'utf-8' })
                if (usersJson == '') {
                users = []
                } else {
                users = JSON.parse(usersJson)
            }
                fs.appendFileSync(path.resolve('data', 'users', 'users.json'), JSON.stringify(users))

        res.redirect('index')
                   
    }
}

module.exports = usersController;