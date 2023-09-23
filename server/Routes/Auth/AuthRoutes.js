const express = require("express");
const router = express.Router();
const registerController = require("../../Controllers/Auth/RegisterController");
const loginController = require("../../Controllers/Auth/LoginController");

router.post("/register", registerController);

router.post("/login", loginController);
module.exports = router;
