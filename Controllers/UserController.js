const userServices = require('../Services/User.service')
const { sendResponse } = require('../Utils/Util.Service')



const addUser = async (req, res, next) =>
{
    let { firstname, lastname, email, password, mobile_no, role } = req.body
    try
    {
        let user = await userServices.addUser(firstname, lastname, email, password, mobile_no, role)
        if (user)
            return sendResponse(res, 201, 'User added successfully', user)
    } catch
    {
        return sendResponse(res, 500, 'Error! Creating User', user)
    }
}

const updateUser = async (req, res, next) =>
{
    let { firstname, lastname, email, password, mobile_no, role } = req.body
    try
    {
        let user = await userServices.updateUser(firstname, lastname, email, password, mobile_no, role)
        if (user)
            return sendResponse(res, 201, 'User updated successfully', user)
    } catch
    {
        return sendResponse(res, 500, 'Error! Updating User', null)
    }
}

const getUserById = async (req, res, next) =>
{
    let { id } = req.params
    try
    {
        let user = await userServices.getUserById(id)
        if (user)
            return sendResponse(res, 201, 'User found successfully', user)
    } catch
    {
        return sendResponse(res, 500, 'Error! Getting User', null)
    }
}

const deleteUserById = (req, res, next) =>
{
    let { id } = req.params
    try
    {
        let response = userServices.deleteUserById(id)
        if (response)
            return sendResponse(res, 201, 'User deleted successfully', response)
    } catch
    {
        return sendResponse(res, 500, 'Error! Deleting User', null)

    }
}

const getUsers = (req, res, next) =>
{
    try
    {
        let users = userServices.getUsers()
        if (users)
            return sendResponse(res, 201, 'Users found successfully', users)
    } catch
    {
        return sendResponse(res, 500, 'Error! Getting Users', null)
    }
}


module.exports = {
    addUser,
    updateUser,
    getUserById,
    deleteUserById,
    getUsers
}