const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');
const User = require('./User');

const Friend = sequelize.define('Friend', {
  friend_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  friend_user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    },
  },
});

module.exports = Friend;
