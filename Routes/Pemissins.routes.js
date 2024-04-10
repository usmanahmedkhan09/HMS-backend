const express = require('express');
const router = express.Router();

const { createValidationMiddleware } = require('../Middlewares/ValidationMiddleware')
const validatePermissionsInput = createValidationMiddleware('permission')
const validatePermissionId = createValidationMiddleware('genericId')

const permissionController = require('../Controllers/PermissionsController')


router.post('/addpermission', validatePermissionsInput, permissionController.addpermission)

router.put('/updatePermission/:id', [validatePermissionId, validatePermissionsInput], permissionController.updatePermission)

router.delete('/deletePermissionById/:id', validatePermissionId, permissionController.deletePermissionById)

router.get('/getPermissionById/:id', validatePermissionId, permissionController.getPermissionById)

router.get('/', permissionController.getPermissions)

module.exports = router;