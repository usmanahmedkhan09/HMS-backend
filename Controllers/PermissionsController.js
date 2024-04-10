const permissionsService = require('../Services/Permissions.service')
const { sendResponse } = require('../Utils/Util.Service')



const addPermission = async (req, res, next) =>
{
    let { name } = req.body
    try
    {
        let response = await permissionsService.addPermission(name, permissions)
        if (response)
            return sendResponse(res, 201, 'Permission added successfully', response)
    } catch
    {
        return sendResponse(res, 500, 'Error! Creating Permission', null)
    }
}

const updatePermission = async (req, res, next) =>
{
    let { name } = req.body
    try
    {
        let response = await permissionsService.updatePermission(name)
        if (response)
            return sendResponse(res, 201, 'Permission updated successfully', response)
    } catch
    {
        return sendResponse(res, 500, 'Error! Updating Permission', null)
    }
}

const getPermissionById = async (req, res, next) =>
{
    let { id } = req.params
    try
    {
        let response = await permissionsService.getPermissionById(id)
        if (response)
            return sendResponse(res, 201, 'Permission found successfully', response)
    } catch
    {
        return sendResponse(res, 500, 'Error! Getting Permission', null)
    }
}

const deletePermissionById = (req, res, next) =>
{
    let { id } = req.params
    try
    {
        let response = permissionsService.removePermission(id)
        if (response)
            return sendResponse(res, 201, 'Permission deleted successfully', response)
    } catch
    {
        return sendResponse(res, 500, 'Error! Deleting Permission', null)

    }
}

const getPermissions = (req, res, next) =>
{
    try
    {
        let response = permissionsService.getPermissions()
        if (response)
            return sendResponse(res, 201, 'Permissions found successfully', response)
    } catch
    {
        return sendResponse(res, 500, 'Error! Getting Permissions', null)
    }
}


module.exports = {
    addPermission,
    updatePermission,
    getPermissionById,
    deletePermissionById,
    getPermissions
}