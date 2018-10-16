const Recipe = require('../../database/models/recipe');

exports.saveRecipe = (recipe, callback) => {
  const newRecipe = new Recipe(recipe);
  newRecipe.save((err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

exports.getAllRecipes = (callback) => {
  Recipe.find({}, (err, recipes) => {
    if (err) {
      callback(err);
    } else {
      callback(null, recipes);
    }
  });
};

exports.removeRecipe = (name, callback) => {
  Recipe.deleteOne({name}, (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};
