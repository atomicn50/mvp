import styled from 'styled-components';

const AppContainer = styled.section`
  display: inline-flex;
`;

const CurrentRecipeContainer = styled.section`
  margin-left: 50px;
`;

const FormContainer = styled.section`
  padding-top: 50px;
  text-align: center;
  margin: auto;
  align-self: auto;
  width: 50%;
`;

const IngredientsContainer = styled.section`
  margin-right: 5px;
`;

const RecipeListContainer = styled.section`
  text-align: center;
  display: inline-flex;
  margin: auto;
  align-self: auto;
  width: 50%;
`;

const RecipeContainer = styled.section`
  display: inline-flex;
  margin-top: 50px;
`;

const RecipesContainer = styled.section`
  
`;

const StepsContainer = styled.section`
  margin-left: 5px;
`;

const Title = styled.section`
  position: absolute;
  font-size: 30px;
  text-align: center;
  margin: auto;
  margin-bottom: 5px;
  width: 50%;
`;


export {
  AppContainer,
  CurrentRecipeContainer,
  FormContainer,
  IngredientsContainer,
  RecipeContainer,
  RecipeListContainer,
  Title,
  RecipesContainer,
  StepsContainer,
};
