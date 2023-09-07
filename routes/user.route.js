const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

//add new user information
router.post("/registration", userController.addUser);




module.exports = router;