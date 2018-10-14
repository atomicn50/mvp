import React from 'react';
import RecipeList from './RecipeList.jsx';
import RecipeForm from './RecipeForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <RecipeList />
        <RecipeForm />
      </div>
    );
  }
}

export default App;
