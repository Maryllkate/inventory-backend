const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

//add new user information
router.post("/registration", userController.addUser);

//update user information
router.put("/update/:id", userController.editUser);

//view user information



module.exports = router;