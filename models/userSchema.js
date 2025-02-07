const mongoose = require("mongoose");
const {Schema} = require("mongoose");

// Creating user schema with mongoose schems instance

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        minLength: [2, "Please enter your name"],
        required: [true, "Your name is required"]
    },

    email: {
        type: String,
        required: [true, "Your name is required"]
    },

    password: {
        type: String,
        minLength: [6, "Password should atleast have 6 charecters "],
        required: [true, "Please enter your password"]
    },

    phoneNo: {
        type: String,
        minLength: [10, "Please enter valid mobile number"],
        maxLength: [10, "Please enter valid mobile number"],
        required: [true, "Please enter your mobile number"],
    },

    token: {
        type: String
    },

    timeStamp: true

})

module.exports = mongoose.model("users", userSchema);