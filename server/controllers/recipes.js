const Recipe = require('../../database/models/recipe');

exports.saveRecipe = (recipe, callback) => {
  const newRecipe = new Recipe(recipe);
  newRecipe.save((err, success) => {
    if (err) {
      callback(err);
    }
    callback(null, success);
  });
};

exports.getAllRecipes = (callback) => {
  Recipe.find({}, (err, recipes) => {
    if (err) {
      callback(err);
    }
    callback(null, recipes);
  });
};
