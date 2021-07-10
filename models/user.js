const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // user credentials
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // optionally save dietary restrictions to profile
    diet: {
        type: String,
    },

})

const User = mongoose.model("User", userSchema);

module.exports = User;