const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    // name of recipe
    title: {
        type: String,
    },
    // url for recipe
    link: {
        type: String,
        default: "",
    }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;