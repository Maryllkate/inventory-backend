const userModel = require("../models/user.model");

module.exports.addUser = async (req, res) => {
    try {
        //declaring database JSON from model file
        const newUser = new userModel({
            firstName : req.body.firstName,
            middleName : req.body.middleName,
            lastName : req.body.lastName,
            email : req.body.email,
            userName : req.body.userName,
            password : req.body.password
        });

        await newUser.save();
        res.status(200).json({message: "a new user successfully created"});
    
    } catch (err) {
        console.error("Error adding new user", err);
        res.status(404).json({message: "an error occured while adding new user"});
    }
};