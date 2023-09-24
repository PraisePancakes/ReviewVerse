const express = require("express");
const router = express.Router();
const verifyToken = require("../Middlewares/verifyToken");
const getUserController = require("../Controllers/GetUserController");

router.get("/", verifyToken, getUserController);

module.exports = router;
