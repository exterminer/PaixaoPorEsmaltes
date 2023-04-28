const {Sequelize} = require("sequelize")

const sequelize =  new Sequelize("paixaoPorEsmaltes","root","",{
    host: "localhost",
    dialect:"mysql"
})

module.exports = sequelize

