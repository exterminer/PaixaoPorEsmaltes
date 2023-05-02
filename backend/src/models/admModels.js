const conn = require("../db/conn");

const User = require("../models/user");
const app = require("../app");
const { raw } = require("express");
const { where } = require("sequelize");

const getALL = async () => {
  const users = await User.findAll({ raw: true });
  return users;
};

const searchSpecific = async (data) => {
  const id = data.id;
  const user = await User.findOne({ where: { id: id } }, { raw: true });
  return user;
};

const createUser = async (data) => {
  const name = data.name;
  const isEmployee = data.isEmployee;
  const email = data.email;
  const phone = data.phone;

  await User.create({ name, isEmployee, email, phone });
};

const deleteUser = async (data) => {
  const id = data.id;
  await User.destroy({ where: { id: id } });
};

const updateUser = async (data, params) => {
  const id = params.id;
  const name = data.name;
  const isEmployee = data.isEmployee;
  const email = data.email;
  const phone = data.phone;

  await User.update(
    { name, isEmployee, email, phone },
    {
      where: {
        id: id,
      },
    }
  );
};

module.exports = {
  getALL,
  createUser,
  deleteUser,
  updateUser,
  searchSpecific
};
