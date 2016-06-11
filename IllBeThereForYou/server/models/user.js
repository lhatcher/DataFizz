const Sequelize = require('sequelize');

const sequelize = require('../connection');

const User = sequelize.define('users', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' 
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name',
  }
}, { freezeTableName: true });

module.exports = User;