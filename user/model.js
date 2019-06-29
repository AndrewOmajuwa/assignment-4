//import sequelize
const Sequelize = require('sequelize')

//import db
const sequelize = require('../db')

//create a user model
const User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
  tableName: 'users'
})

//export user
module.exports = User