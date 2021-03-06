const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  steps: {
    type: String,
    required: true,
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// Recipe.deleteMany({}, () => {console.log('deleted all recipes')}) 
// Recipe.deleteOne({name: 332}, () => {console.log('deleted')})
module.exports = Recipe;
