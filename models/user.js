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
    menu: [
        {
            recipe: [
                {
                    title: {
                        type: String,
                        required: true,
                    },
                    // url for recipe
                    link: {
                        type: String,
                        default: "",
                    },
                    // save calories, if available
                    calories: {
                        type: Number,
                    },
                }
            ],
            // what dietary restrictions
            requirement: {
                type: String,
            },
            // what date/day? for this menu
            date: {
                type: Date,
            },
            // breakfast/lunch/dindin
            meal: {
                type: String,
            }
        }
    ]

})

const User = mongoose.model("User", userSchema);

module.exports = User;