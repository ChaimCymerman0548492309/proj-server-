import express from "express";
import userController from "../controllers/userControllers.js"

const router = express.Router();

router.get("/", userController.getAllProduces)

router.get("/:id", userController.getProduce)

router.post("/:newProduce", userController.createProduce);

router.put("/:id", userController.updateProduce);

router.delete("/:id", userController.deleteProduce);

router.patch("/:id", userController.updateAmount);


export default router 