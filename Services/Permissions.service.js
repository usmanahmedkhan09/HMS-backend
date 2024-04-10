const Permission = require('../Models/Permissions.model');

async function addPermission(name)
{
    const permission = new Permission({ name: name });
    return await permission.save();
}

async function updatePermission(name)
{
    const permission = await Permission.findByIdAndUpdate(
        { _id: id },
        { name: name }
    ).exec();
    return permission
}

async function removePermission(id)
{
    const permission = await Permission.findByIdAndDelete({ _id: id }).exec();
    return permission
}

async function getPermissionById()
{
    const permission = await Permission.findById(id).exec();
    return permission
}

async function getPermissions()
{
    const permissions = await Permission.find({});
    return permissions
}

module.exports = {
    addPermission,
    updatePermission,
    removePermission,
    getPermissionById,
    getPermissions
}