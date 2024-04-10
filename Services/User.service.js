const User = require('../models/User.model');

async function addUser(first_name, last_name, email, password, mobile_no, role)
{
    const user = new User({ first_name: first_name, last_name: last_name, email: email, password: password, mobile_no: mobile_no, role: role });
    return await user.save();
}

async function updateUser(first_name, last_name, email, password, mobile_no, role)
{
    const user = await User.findByIdAndUpdate(
        { _id: id },
        { first_name: first_name, last_name: last_name, email: email, password: password, mobile_no: mobile_no, role: role }
    ).exec();
    return user
}

async function removeUser(id)
{
    const user = await User.findByIdAndDelete({ _id: id }).exec();
    return user
}

async function getUserById()
{
    const user = await User.findById(id).exec();
    return user
}

module.exports = {
    addUser: addUser,
    updateUser: updateUser,
    removeUser: removeUser,
    getUserById, getUserById
}