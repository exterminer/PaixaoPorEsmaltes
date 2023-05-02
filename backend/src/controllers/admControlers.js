const admModels = require("../models/admModels");

const search = async (req, res) => {
  const users = await admModels.getALL();
  return res.status(200).json(users);
};

const searchedSpecif = async(req,res)=>{
    const user = await admModels.searchSpecific(req.params)
    return res.status(200).json(user)
}

const createdUser = async (req, res) => {
  const createUser = await admModels.createUser(req.body);
  return res.status(201).json(createUser);
};

const deletedUser = async (req, res) => {
  const deletedUser = await admModels.deleteUser(req.params);
  return res.status(204).json();
};


const updatedUser = async(req,res)=>{
    const upatedUser = await admModels.updateUser(req.body,req.params)
    return res.status(204).json()
}
module.exports = { search, createdUser, deletedUser, updatedUser,searchedSpecif };
