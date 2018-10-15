import React from 'react';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit() {
    this.props.addRecipe(this.state);
  }

  render() {
    return (
      <div>
        <label htmlFor="recipeName">
          Recipe Name
          <input id="name" type="text" onChange={this.handleChange} />
        </label>
        <label htmlFor="ingredients">
          Ingredients
          <textarea id="ingredients" type="text" rows="20" cols="20" onChange={this.handleChange} />
        </label>
        <button type="submit" onClick={this.handleSubmit}>Submit Recipe</button>
      </div>
    );
  }
}

export default RecipeForm;
