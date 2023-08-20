import userService from "../services/userService.js";
import express from "express";




const getAllProduces = async (req, res) => {
    try {
        const users = await userService.getAllProduces();
        res.json(users);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Server error1" });
    }
};


const createProduce = async (req, res) => {
    try {
        const newUser = req.body;
        const createdUser = await userService.createUser(newUser);
        res.status(201).json(createdUser);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Server error Produce not created" });
    }
};

const getProduce = async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const user = await userService.getUser(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Server error3" });
    }
};





const updateProduce = async (req, res) => {
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
        res.status(500).json({ error: "Server error4" });
    }
};



const deleteProduce = async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const deletedUser = await userService.deleteUser(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(deletedUser);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Server error5" });
    }
}

const updateAmount = async (req, res) => {
        try {
            const userId = parseInt(req.params.id);
            const updatedUser = req.body;
            const user = await userService.updateAmount(userId, updatedUser);

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            res.json(user);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Server error4" });
        }
    };



export default {
    createProduce,
    getProduce,
    getAllProduces,
    updateProduce,
    deleteProduce,
    updateAmount
};



