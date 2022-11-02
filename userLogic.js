const User = require("./model")

//creat new user
const createUser = async ({ name, phone }) => {
    if (!name) throw { message: "שם הוא שדה חובה" }
    if (!phone) throw { message: "טלפון הוא שדה חובה" }
    const user = await User.findOne({ where: { username: name, isActive: 1 } })
    if (user) {
        throw { message: "שם זה כבר קיים" }
    }
    return (await User.create({ username: name, phone, isActive: 1 }))

}

//get users list
const getUsers = async () => {
    const users = await User.findAll({ where: { isActive: 1 } })
    return users

}

//edit user
const updateUser = async ({ id, name, phone }) => {
    const user = await User.findOne({ where: { id } })
    if (!name) throw { message: "שם הוא שדה חובה" }
    if (!phone) throw { message: "טלפון הוא שדה חובה" }

    user.username = name;
    user.phone = phone
    await user.save();
    return user

}

//remove user
const deleteUser = async ({ id }) => {
    const user = await User.findOne({ where: { id } })
    console.log(user);
    user.isActive = 0
    await user.save();
    return user

}

module.exports = { createUser, getUsers, updateUser, deleteUser }