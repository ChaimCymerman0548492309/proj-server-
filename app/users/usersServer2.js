
import userRepository from "./dal2.js";
import express from "express";





const createUser = async (user) => {
    return userRepository.createUser(user);
};

const getUser = async (userId) => {
    return userRepository.getUser(userId);
  };
  



export default {
    createUser,
    getUser
};