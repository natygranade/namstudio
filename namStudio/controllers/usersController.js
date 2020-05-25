let fs = require('fs');
let usersController = {
 
        
    signup: function( req, res){
        res.render('signUp')
    },
    login: function( req, res){
        res.render('logIn')
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
            let usersJson = fs.readFileSync (path.resolve('data','users', 'users.json'), {encoding: 'utf-8'})
            if(usersJson == ''){
                users = []
            } else{
                users = JSON.parse(usersJson)
            }
            users.push(user);
            usersJson = JSON.stringify(users);
            fs.writeFileSync(path.resolve('data','users', 'users.json'),usersJson)
           
             res.redirect('index')
        },
    edit: function (req,res){
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
    delete: function (req,res){
                
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