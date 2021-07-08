const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    // name of recipe from api
    recipe: {
        type: String,
    },
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
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;