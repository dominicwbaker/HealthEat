const express = require('express');
const router = express.Router();
const Recipe = require('../../models/recipe');
const recipeController = require('../../controllers/recipeController');

router.route("/recipes")
    .get(recipeController.findAll);
    
router.route("/recipes/:id")
    .get(recipeController.findById)
    .put(recipeController.update)
    .delete(recipeController.remove);

module.exports = router;