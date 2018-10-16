import React from 'react';

const RecipeButton = ({ recipe, changeRecipe }) => (
  <div>
    <button type="submit" onClick={() => changeRecipe(recipe)}>{recipe.name}</button>
  </div>
);


export default RecipeButton;
