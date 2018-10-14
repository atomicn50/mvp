import React from 'react';
import axios from 'axios';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
      ingredients: [],
    };
  }

  addRecipe(recipe) {
    axios.post('/recipes', recipe)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
      	console.log(error);
      });
  }

  render() {
    return (
      <div>
        <label>
        Name
        </label>
      </div>
  	);
  }
};

export default RecipeForm;
