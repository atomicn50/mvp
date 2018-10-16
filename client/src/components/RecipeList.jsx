import React from 'react';
import RecipeButton from './RecipeButton.jsx';
import CurrentRecipe from './CurrentRecipe.jsx';
import { RecipeListContainer, RecipesContainer } from '../styles.jsx';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRecipe: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRemoval = this.handleRemoval.bind(this);
  }

  handleClick(currentRecipe) {
    this.setState({
      currentRecipe,
    });
  }

  handleRemoval(recipe) {
    this.props.removeRecipe(recipe);
  }

  render() {
    const { recipes } = this.props;
    const { currentRecipe } = this.state;
    return (
      <RecipeListContainer>
        <RecipesContainer>
          <h1>All Recipes</h1>
          {recipes.map(recipe => <RecipeButton recipe={recipe} changeRecipe={this.handleClick} removeRecipe={this.handleRemoval} />)}
        </RecipesContainer>
        <CurrentRecipe recipe={currentRecipe} />
      </RecipeListContainer>
    );
  }
}

export default RecipeList;
