const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('contacts-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: "./dev.sqlite"
})

module.exports = sequelize