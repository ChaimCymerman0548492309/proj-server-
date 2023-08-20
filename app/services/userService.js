import userRepository from "../dal/userRepository.js";
import express from "express";


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

  const updateAmount = async (userId, updatedUser) => {
    return userRepository.updateAmount(userId, updatedUser);
  };
  


export default {
  createUser,
  getUser,
  getAllProduces,
  updateUser,
  deleteUser,
  updateAmount,
};