
import userRepository from "./dal2.js";
import express from "express";


const createUser = async (user) => {
    const { error } = userSchema.validate(user);
    if (error) {
      throw new Error(`Validation error: ${error.details[0].message}`);
    }
  
    const hashedPassword = await hash(user.password, 10);
    user.password = hashedPassword;
  
    return userRepository.createUser(user);
  };
  





  const getUser = async (userId) => {
    return userRepository.getUser(userId);
  };
  




  const getAllUsers = async (isAdmin) => {
    return userRepository.getAllUsers(isAdmin);
  };
  



  const updateUser = async (userId, updatedUser) => {
    return userRepository.updateUser(userId, updatedUser);
  };
  


  
  const deleteUser = async (userId) => {
    return userRepository.deleteUser(userId);
  };
  
  export default {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
  };


// const createUser = async (user,userId) => {
//     return userRepository.createUser(user,userId);
// };

// const getUser = async (userId) => {
//     return userRepository.getUser(userId);
//   };
  



// export default {
//     createUser,
//     getUser
// };