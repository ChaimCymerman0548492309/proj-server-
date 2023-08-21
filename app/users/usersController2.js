import userService from "./usersServer2.js";
import express from "express";




const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        console.log(newUser)
        const createdUser = await userService.createUser(newUser);
        console.log(createdUser)

        res.status(201).json(createdUser);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Server error Produce not created" });
    }
};


const getUser = async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const user = await userService.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Server error" });
    }
  };

export default {
    createUser, 
    getUser

};
