import React from 'react';

const RecipeButton = ({ recipe, changeRecipe, removeRecipe }) => (
  <div>
    <button type="submit" onClick={() => changeRecipe(recipe)}>{recipe.name}</button>
    <button type="submit" onClick={() => removeRecipe(recipe.name)}>X</button>
  </div>
);


export default RecipeButton;
