const { DataTypes, Sequelize, Model } = require("sequelize");

const db = require("../db/conn");

class Employee extends Sequelize.Model {}

Employee.init(
  {
    idEmployee: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isEmployee: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "Employee",
  }
);

module.exports = Employee;
