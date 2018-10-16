import React from 'react';
import axios from 'axios';
import { AppContainer, Title } from '../styles.jsx';
import RecipeList from './RecipeList.jsx';
import RecipeForm from './RecipeForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
    this.getRecipes = this.getRecipes.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes() {
    axios.get('/api/recipes')
      .then(response => response.data)
      .then((recipes) => {
        this.setState({
          recipes,
        });
      })
      .catch(err => console.error.bind(console, err));
  }

  addRecipe(recipe) {
    axios.post('/api/recipes', recipe)
      .then(() => this.getRecipes())
      .catch(err => console.error.bind(console, err));
  }

  removeRecipe(recipeName) {
    axios.delete(`/api/recipes/${recipeName}`)
      .then(() => this.getRecipes())
      .catch(err => console.error.bind(console, err));
  }

  render() {
    const { recipes } = this.state;
    return (
      <AppContainer>
        <Title>Bare Bones</Title>
        <RecipeForm
          getRecipes={this.getRecipes}
          addRecipe={this.addRecipe}
        />
        <RecipeList
          recipes={recipes}
          removeRecipe={this.removeRecipe}
        />
      </AppContainer>
    );
  }
}

export default App;
