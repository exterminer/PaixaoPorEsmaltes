const Employee = require("../models/employee");
const Client = require("../models/client");
const conn = require("../db/conn");
const { where } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config()
const { nextTick } = require("process");

// const secret = crypto.randomBytes(64).toString("hex");

//Tenho que achar uma maneira de passsar isso para a pastas middlewares sem bugar a aplicaçao
 const  checkEmployeeToken = (req, res, next) =>{
  const authHeader = req.headers["authorization"];
  //   const token = authHeader && authHeader.split(" ")[1];
  //   console.log(authHeader)
  if (!authHeader) {
    res.status(401).json({ message: "Acesso negado" });
  }

 
  const secret = process.env.SECRET
  try {
     jwt.verify(authHeader, secret);
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalido" });
  }
}
//
const employeeRegister = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const passwordconf = req.body.passwordconf;
  const phone = req.body.phone;
  const isEmployee = true;
  const uuid = uuidv4();

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
    return res.status(400).json({ message: "As senhas não conferem" });
  }
  if (!phone) {
    return res
      .status(400)
      .json({ message: "Digite um numero de celular valido" });
  }

  const checkUser = await Employee.findOne({ where: { email: email } });

  if (checkUser) {
    return res.status(400).json({ message: "Por favor utilize outro email " });
  }

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  try {
    await Employee.create({
      name,
      email,
      password: passwordHash,
      phone,
      isEmployee,
      uuid,
    });
    return res.status(201).json({ message: "Usuario criado com sucesso " });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Aconteceu um erro no servidor,tente novamente" });
  }
};
const employeeLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email) {
    return res.status(400).json({ message: "Digite um Email valido " });
  }
  if (!password) {
    return res.status(400).json({ message: "Senha invalida " });
  }

  const user = await Employee.findOne({ where: { email: email } });

  if (!user) {
    return res.status(404).json({ message: "Email nao cadastrado" });
  }

  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(404).json({ message: "Senha incorreta" });
  }
  const secret = process.env.SECRET
  const token = jwt.sign({ id: user.uuid }, secret);
  const userToSend = {
    idEmployee: user.idEmployee,
  };
  try {
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

const getInfosUser = async (req, res) => {
  const id = req.params.id;
  
  const user = await Employee.findOne({ where: { idEmployee: id } });

  if (!user) {
    return res.status(404).json({ message: "Usuário nao encontrado" });
  }
  const userToSend = {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    isEmployee: user.isEmployee,
    uuid: user.uuid,
  };

  return res.status(200).json(userToSend);
};


const clientRegister = async (req, res) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const name = req.body.name;
  const phone = req.body.phone;
  const uuid = uuidv4();
  if (!name) {
    return res.status(400).json({ message: "Digite um nome valido" });
  }
  if (!phone) {
    return res
      .status(400)
      .json({ message: "Digite um numero de celular valido " });
  }
  try {
    await Client.create({
      name,
      phone,
      uuid,
    });
    return res.status(200).json({ message: "Cliente Cadastrada com sucesso" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Aconteceu um erro no servidor,tente novamente" });
  }
};

module.exports = {
  employeeRegister,
  employeeLogin,
  getInfosUser,
  checkEmployeeToken,
  clientRegister,

};
