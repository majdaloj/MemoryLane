// sequelize.js
const { Sequelize } = require('sequelize');
const config = require('../config/config.json'); // Update the path as needed

const sequelize = new Sequelize(config.development);

module.exports = sequelize;
