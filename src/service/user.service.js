const User = require("../models/User.model");


const findUsersService = async () => {
    const users = await User.find();
    return users;
  };

  const createUserService = async (newUser) => {
    const userCreate = await User.create(newUser);
    return userCreate;
  };

  const findByIdUserService = async (idParam) => {
    const userId = await User.findById(idParam)
     return userId;
  }

  const findByEmailUserService = (email) => User.findOne({ email: email });

  const updateUserService = async (id, userEdited) => {
    const userUpdate = await User.findByIdAndUpdate(id, userEdited);
    return userUpdate;
  };
  
  const deleteUserService = async (id) => {
    return await User.findByIdAndDelete(id);
  };


module.exports = { findUsersService, createUserService, findByIdUserService, 
  findByEmailUserService, updateUserService, deleteUserService };


