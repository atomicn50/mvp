import React from 'react';
import { CurrentRecipeContainer } from '../styles.jsx';

const CurrentRecipe = ({ recipe }) => {
  const { name, ingredients, steps } = recipe;
  return (
    <CurrentRecipeContainer>
      <h2>Current Recipe</h2>
      <p>{name}</p>
      <p>{ingredients}</p>
      <p>{steps}</p>
    </CurrentRecipeContainer>
  );
};

export default CurrentRecipe;
