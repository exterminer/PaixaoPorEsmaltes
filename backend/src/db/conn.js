const {Sequelize} = require("sequelize")

const sequelize =  new Sequelize("paixaoporesmaltes","root","",{
    host: "localhost",
    dialect:"mysql"
})

module.exports = sequelize

