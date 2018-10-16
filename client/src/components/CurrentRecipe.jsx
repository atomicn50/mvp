import React from 'react';
import { CurrentRecipeContainer } from '../styles.jsx';

const CurrentRecipe = ({ recipe }) => {
  const { name, ingredients, steps } = recipe;
  return (
    <CurrentRecipeContainer>
      <h2>Current Recipe</h2>
      <p>{name}</p>
      <h1>Ingredients</h1>
      <p>{ingredients}</p>
      <h1>Steps</h1>
      <p>{steps}</p>
    </CurrentRecipeContainer>
  );
};

export default CurrentRecipe;
