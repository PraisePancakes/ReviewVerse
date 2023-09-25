const express = require("express");
const router = express.Router();
const registerController = require("../../Controllers/Auth/RegisterController");
const loginController = require("../../Controllers/Auth/LoginController");
const verifyToken = require("../../Middlewares/verifyToken");
const getUserController = require("../../Controllers/Auth/GetUserController");

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/user", verifyToken, getUserController);

module.exports = router;
