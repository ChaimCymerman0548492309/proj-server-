import userService from "./usersServer2.js";

import express from "express";



const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const createdUser = await userService.createUser(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
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

const getAllUsers = async (req, res) => {
  try {
    const isAdmin = req.query
    // console.log(isAdmin)
    const users = await userService.getAllUsers(isAdmin);
    res.json(users);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error (getAllUsers)" });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    const user = await userService.updateUser(userId, updatedUser);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const deletedUser = await userService.deleteUser(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(deletedUser);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};



export default {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser
};

// const createUser = async (req, res) => {
//     try {
//       const userId = parseInt(req.params.id);

//         const newUser = req.body;
//         console.log(newUser)
//         const createdUser = await userService.createUser(newUser,userId);
//         console.log(createdUser)

//         res.status(201).json(createdUser);
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ error: "Server error Produce not created" });
//     }
// };


// const getUser = async (req, res) => {
//     try {
//       const userId = parseInt(req.params.id);
//       const user = await userService.getUser(userId);
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }
//       res.json(user);
//     } catch (error) {
//       console.error("Error:", error);
//       res.status(500).json({ error: "Server error" });
//     }
//   };

// export default {
//     createUser, 
//     getUser

// };
