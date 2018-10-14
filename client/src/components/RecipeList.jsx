import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient.jsx';

const RecipeList = ({ name, ingredients }) => (
  <div>
    <h1>{name}</h1>
    {ingredients.map(ingredient => <Ingredient ingredient={ingredient} />)}
  </div>
);

RecipeList.propTypes = {
  name: PropTypes.string,
  ingredients: PropTypes.array,
};

RecipeList.defaultProps = {
  name: '',
  ingredients: [],
};

export default RecipeList;
