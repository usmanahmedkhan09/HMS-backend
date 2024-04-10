const express = require('express');
const router = express.Router();

const { createValidationMiddleware } = require('../Middlewares/ValidationMiddleware')
const validateRoleInputs = createValidationMiddleware('role')
const validateRoleId = createValidationMiddleware('genericId')

const rolesController = require('../Controllers/RoleController')


router.post('/addRole', validateRoleInputs, rolesController.addRole)

router.put('/updateRole/:id', [validateRoleId, validateRoleInputs], rolesController.updateRole)

router.delete('/deleteRoleById/:id', validateRoleId, rolesController.deleteRoleById)

router.get('/getRoleById/:id', validateRoleId, rolesController.getRoleById)

router.get('/', rolesController.getRoles)

module.exports = router;