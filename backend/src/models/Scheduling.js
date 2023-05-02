const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Scheduling = db.define("scheduling", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  schedule: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  typeOfService: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timeWasted: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  phone: {
    type: DataTypes.NUMBER,
    allowNull: true,
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
});

module.exports = Scheduling;
