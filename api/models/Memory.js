"use strict";

const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize"); // Adjust the path as needed
const User = require("./User");

const Memory = sequelize.define("Memory", {
  memory_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  from_user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "user_id",
    },
  },
  for_user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "user_id",
    },
  },
  send_time: {
    type: DataTypes.DATE,
  },
  media_type: {
    type: DataTypes.STRING,
  },
  media_link: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.TEXT,
  },
  state: {
    type: DataTypes.STRING,
    defaultValue: "visible",
  },
});

Memory.belongsTo(User, {
  foreignKey: "from_user_id",
  targetKey: "user_id",
});

Memory.belongsTo(User, {
  foreignKey: "for_user_id",
  targetKey: "user_id",
});

module.exports = Memory;
