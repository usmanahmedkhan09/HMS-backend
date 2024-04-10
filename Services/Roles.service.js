const Role = require('../Models/Roles.model');

async function addRole(name, permissions)
{
    const role = new Role({ name: name, permissions: permissions });
    return await role.save();
}

async function updateRole(name, permissions)
{
    const role = await Role.findByIdAndUpdate(
        { _id: id },
        { name: name, permissions: permissions }
    ).exec();
    return role
}

async function removeRole(id)
{
    const role = await Role.findByIdAndDelete({ _id: id }).exec();
    return role
}

async function getRoleById()
{
    const role = await Role.findById(id).exec();
    return role
}

module.exports = {
    addRole: addRole,
    updateRole: updateRole,
    removeRole: removeRole,
    getRoleById, getRoleById
}