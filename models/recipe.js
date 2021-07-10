const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    // name of recipe
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
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;