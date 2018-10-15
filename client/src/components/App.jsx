import React from 'react';
import axios from 'axios';
import RecipeList from './RecipeList.jsx';
import RecipeForm from './RecipeForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
    this.getRecipes = this.getRecipes.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
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
      });
  }

  addRecipe(recipe) {
    axios.post('/api/recipes', recipe)
      .then(() => this.getRecipes())
      .catch(err => console.log(err));
  }

  render() {
    const { recipes } = this.state;
    return (
      <div>
        <RecipeList />
        <RecipeForm
          getRecipes={this.getRecipes}
          addRecipe={this.addRecipe}
        />
      </div>
    );
  }
}

export default App;
