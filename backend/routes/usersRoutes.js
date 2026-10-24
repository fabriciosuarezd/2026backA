const express = require('express')
const router = express.Router()

const { crearUser, loginUser, datosUser } = require('../controllers/usersController')

//endpoints publicos
router.post('/login', loginUser)
router.post('/register', crearUser)

//endpoint privado
router.get('/datos', datosUser)

module.exports = router