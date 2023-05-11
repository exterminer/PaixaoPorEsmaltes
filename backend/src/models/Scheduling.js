const { DataTypes, Sequelize, Model, Association } = require("sequelize");
const Employee = require("./employee");
const Client  = require("./client")
const db = require("../db/conn");

// console.log(User.prototype instanceof Sequelize.Model);
class Scheduling extends Sequelize.Model {}

Scheduling.init(
  {
    idScheduling: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idClient: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idEmployee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    scheduleData: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    scheduleTime: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    typeOfService: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timeWasted: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price :{
      type : DataTypes.INTEGER,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Scheduling",
  }
);

Scheduling.belongsTo(Client, {
  foreignKey: "idClient", 
  allowNull: false,
});
Scheduling.belongsTo(Employee, {
  foreignKey: "idEmployee",
  allowNull: false,
});
module.exports = Scheduling;
