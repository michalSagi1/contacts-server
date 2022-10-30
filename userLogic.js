const User = require("./model")

const createUser = async ({ name, phone }) => {
    if (!name) throw { message: "name is required" }
    if (!phone) throw { message: "phone is required" }
    const user = await User.findOne({ where: { username: name, isActive: 1 } })
    if (user) {
        throw { message: "this name is exsit" }
    }
    await User.create({ username: name, phone, isActive: 1 })
    return ("user created")

}
const getUsers = async () => {
    const users = await User.findAll({ where: { isActive: 1 } })
    return users

}
const updateUser = async ({ id, name, phone }) => {
    const user = await User.findOne({ where: { id } })
    const exsistuser = await User.findOne({ where: { username: name, isActive: 1 } })
    if (exsistuser) {
        throw { message: "this name is exsit" }
    }
    user.username = name;
    user.phone = phone
    await user.save();
    return user

}
const deleteUser = async ({ id }) => {
    const user = await User.findOne({ where: { id } })
    console.log(user);
    user.isActive = 0
    await user.save();
    return user

}

module.exports = { createUser, getUsers, updateUser, deleteUser }