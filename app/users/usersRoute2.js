import express from "express";
import userController from "./usersController2.js"

const router = express.Router();



router.post("/", userController.createUser);

router.get("/:id", userController.getUser);



export default router 