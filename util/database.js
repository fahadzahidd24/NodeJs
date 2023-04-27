const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete','root','Fadi786@',{
    dialect:"mysql",
    host:'localhost'
})

module.exports = sequelize;