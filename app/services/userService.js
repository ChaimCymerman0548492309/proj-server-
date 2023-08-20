import userRepository from "../dal/userRepository.js";


const getAllProduces = async () => {
    return userRepository.getAllUsers();
  };
  

const getUser = async (userId) => {
  return userRepository.getUser(userId);
};

const updateUser = async (userId, updatedUser) => {
  return userRepository.updateUser(userId, updatedUser);
};

const deleteUser = async (userId) => {
  return userRepository.deleteUser(userId);
};


const createUser = async (user) => {
    return userRepository.createUser(user);
  };


export default {
  createUser,
  getUser,
  getAllProduces,
  updateUser,
  deleteUser,
};