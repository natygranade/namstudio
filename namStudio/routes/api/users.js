let express = require('express')
let router = express.Router()
const apiUsersCotroller = require('../../controllers/apiUsersController')


router.get ('/', apiUsersCotroller.list)

router.get('/logedUser', apiUsersCotroller.detail)

module.exports = router