const { Model } = require('sequelize')
const sequelize = require('./database')

class User extends Model { }

User.init({
    username: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    isActive: {
        type: Boolean,
        require: true

    }
},
    {
        sequelize,
        modelName: 'user',
        timestamps: false
    })

module.exports = User