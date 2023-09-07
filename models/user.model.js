const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    
    firstName : {
        type : String,
        required : [true, "First Name is required"]
    },
    middleName : {
        type : String
    },
    lastName : {
        type : String,
        required : [true, "Last Name is required"]
    },
    email: {
        type : String,
        required : [true, "email is required"]
    },
    userName : {
        type : String,
        required : [true, "username is required"]
    },
    password : {
        type : String,
        required : [true, "password is required"]
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
    
})


module.exports = mongoose.model("users", usersSchema)