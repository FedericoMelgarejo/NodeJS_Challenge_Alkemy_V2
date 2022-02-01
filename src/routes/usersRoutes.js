const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')
const loginValidator = require('../middlewares/loginValidator')
const registerValidator = require('../middlewares/registerValidator')



router.post('/register',registerValidator, usersController.register)

router.post('/login', loginValidator, usersController.login)


module.exports = router;
