const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs', 'root', 'codelogicx101', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;