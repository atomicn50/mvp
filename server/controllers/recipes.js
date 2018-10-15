import Recipe from '../../database/index';

exports.saveRecipe = (recipe, callback) => {
  const newRecipe = new Recipe(recipe);
  newRecipe.save((err, success) => {
    if (err) {
      callback(err);
    }
    callback(null, success);
  });
};

// exports.deleteRecipe = (recipe) => {
  
// };


