import React from 'react';
import {
  FormContainer,
  RecipeContainer,
  IngredientsContainer,
  StepsContainer,
} from '../styles.jsx';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: '',
      steps: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInputFields = this.clearInputFields.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit() {
    this.props.addRecipe(this.state);
    this.clearInputFields();
  }

  clearInputFields() {
    this.setState({
      name: '',
      ingredients: '',
      steps: '',
    });
  }

  render() {
    const { name, ingredients, steps } = this.state;
    return (
      <FormContainer>
        <div>
          <label htmlFor="recipeName">
            Recipe Name
            <input id="name" type="text" onChange={this.handleChange} value={name} />
          </label>
        </div>
        <RecipeContainer>
          <IngredientsContainer>
            <textarea id="ingredients" type="text" rows="20" cols="20" onChange={this.handleChange} value={ingredients} />
            <p>Ingredients</p>
          </IngredientsContainer>
          <StepsContainer>
            <textarea id="steps" type="text" rows="20" cols="20" onChange={this.handleChange} value={steps} />
            <p>Steps</p>
          </StepsContainer>
        </RecipeContainer>
        <button type="submit" onClick={this.handleSubmit}>Submit Recipe</button>
      </FormContainer>
    );
  }
}

export default RecipeForm;
