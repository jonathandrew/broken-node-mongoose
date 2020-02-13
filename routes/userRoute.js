const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllusers);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.put("/updateProfil/:id", userController.updateProfile);
router.delete("/deletProfile/:id", userController.deleteProfile);

module.exports = router;
