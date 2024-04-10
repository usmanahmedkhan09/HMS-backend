const roleServices = require('../Services/Roles.service')
const { sendResponse } = require('../Utils/Util.Service')



const addRole = async (req, res, next) =>
{
    let { name, permissions } = req.body
    try
    {
        let response = await roleServices.addRole(name, permissions)
        if (response)
            return sendResponse(res, 201, 'Role added successfully', response)
    } catch
    {
        return sendResponse(res, 500, 'Error! Creating Role', null)
    }
}

const updateRole = async (req, res, next) =>
{
    let { name, permissions } = req.body
    try
    {
        let response = await roleServices.updateRole(name, permissions)
        if (response)
            return sendResponse(res, 201, 'Role updated successfully', response)
    } catch
    {
        return sendResponse(res, 500, 'Error! Updating User', null)
    }
}

const getRoleById = async (req, res, next) =>
{
    let { id } = req.params
    try
    {
        let response = await roleServices.getRoleById(id)
        if (response)
            return sendResponse(res, 201, 'Role found successfully', role)
    } catch
    {
        return sendResponse(res, 500, 'Error! Getting User', null)
    }
}

const deleteRoleById = (req, res, next) =>
{
    let { id } = req.params
    try
    {
        let response = roleServices.removeRole(id)
        if (response)
            return sendResponse(res, 201, 'Role deleted successfully', response)
    } catch
    {
        return sendResponse(res, 500, 'Error! Deleting Role', null)

    }
}

const getRoles = (req, res, next) =>
{
    try
    {
        let response = roleServices.getRoles()
        if (response)
            return sendResponse(res, 201, 'Roles found successfully', response)
    } catch
    {
        return sendResponse(res, 500, 'Error! Getting Role', null)
    }
}


module.exports = {
    addRole,
    updateRole,
    getRoleById,
    deleteRoleById,
    getRoles
}