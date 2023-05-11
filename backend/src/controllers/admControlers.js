const admModels = require("./admModels");
const User = require("../models/employee");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { where } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const { use } = require("../app");
const secret = crypto.randomBytes(64).toString("hex");

const search = async (req, res) => {
  const users = await admModels.getALL();
  return res.status(200).json(users);
};

const searchedSpecif = async (req, res) => {
  const user = await admModels.searchSpecific(req.params);
  return res.status(200).json(user);
};

const createdUser = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const passwordconf = req.body.passwordconf;
  const phone = req.body.phone;
  const uuid = uuidv4();
  const isEmployee = 0;

  if (!name) {
    return res.status(400).json({ message: "Digite um nome valido" });
  }
  if (!email) {
    return res.status(400).json({ message: "Digite um email valido" });
  }
  if (!password) {
    return res.status(400).json({ message: "Digite uma senha valida" });
  }
  if (password !== passwordconf) {
    return res.status(400).json({ message: "As senhas nao conferem" });
  }
  if (!phone) {
    return res
      .status(400)
      .json({ message: "Digite um numero de celular valido" });
  }
  const checkUser = await User.findOne({ where: { email: email } });

  if (checkUser) {
    return res.status(400).json({ message: "Por favor utilize outro e-mail" });
  }
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  try {
    await User.create({
      name,
      email,
      password: passwordHash,
      phone,
      isEmployee,
      uuid,
    });
    res.status(201).json({ message: "Usuario criado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Aconteceu um erro no servidor,tente novamente" });
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email) {
    return res.status(400).json({ message: "Digite um email valido" });
  }
  if (!password) {
    return res.status(400).json({ message: "Senha invalida " });
  }

  const user = await User.findOne({ where: { email: email } });

  if (!user) {
    return res.status(404).json({ message: "Email nao cadastrado" });
  }
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(404).json({ message: "Senha incorreta" });
  }
  try {
    const token = jwt.sign({ id: user.uuid }, secret);
    const userToSend = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      isEmployee: user.isEmployee,
      uuid: user.uuid,
    };
    res.status(200).json({
      message: "Autenticaçao realizada com sucesso",
      token,
      userToSend,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Aconteceu um erro no servidor,tente novamente" });
  }
};

const deletedUser = async (req, res) => {
  const deletedUser = await admModels.deleteUser(req.params);
  return res.status(204).json();
};

const updatedUser = async (req, res) => {
  const upatedUser = await admModels.updateUser(req.body, req.params);
  return res.status(204).json();
};
//private Routes
const logedUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id, "-password");
  if (!user) {
    return res.status(404).json({ message: "Usuário nao encontrado" });
  }

  res.status(200).json({ user });
};

module.exports = {
  search,
  createdUser,
  deletedUser,
  updatedUser,
  searchedSpecif,
  loginUser,
  logedUser,
};
