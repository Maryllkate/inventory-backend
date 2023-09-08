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
    
    } catch (error) {
        console.error("Error adding new user", error);
        res.status(404).json({message: "an error occured while adding new user"});
    }
};

module.exports.allUser = async (req, res) => {
    
}

module.exports.editUser = async (req, res) => {
    try {
        
        const updateUser = await userModel.findByIdAndUpdate(
             _id = req.params.id,
             {
                firstName : req.body.firstName,
                middleName : req.body.middleName,
                lastName : req.body.lastName
             },
            {
                new : true
            }
             
        );

        if(!updateUser){
            return res.status(404).json({message : "user not found"})
        }

        res.status(200).json({message : "user successfully updated", userModel: updateUser});

    } catch (error) {
        console.error("Error updating user", error);
        res.status(404).json({message: "an error occured while updating the user"});
    }
}