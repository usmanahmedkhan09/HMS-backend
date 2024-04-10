const express = require('express');
const router = express.Router();

const { createValidationMiddleware } = require('../Middlewares/ValidationMiddleware')
const validateUserInputs = createValidationMiddleware('user')
const validateUserId = createValidationMiddleware('genericId')

const usersController = require('../Controllers/UserController')


router.post('/addUser', validateUserInputs, usersController.addUser)

router.put('/updateUser/:id', [validateUserId, validateUserInputs], usersController.updateUser)

router.delete('/deleteUserById/:id', validateUserId, usersController.deleteUserById)

router.get('/getUserById/:id', validateUserId, usersController.getUserById)

router.get('/', usersController.getUsers)

module.exports = router;