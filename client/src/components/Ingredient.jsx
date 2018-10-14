import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({ ingredient }) => {
  return (
    <div>
      <h1>{ingredient}</h1>
    </div>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.string,
};

Ingredient.defaultProps = {
  ingredient: '',
};

export default Ingredient;
