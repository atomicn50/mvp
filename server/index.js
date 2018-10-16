const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');
const controllers = require('./controllers/recipes');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(bodyParser.json());

app.post('/api/recipes', (req, res) => {
  const recipe = req.body;
  controllers.saveRecipe(recipe, (err) => {
    if (err) {
      res.sendStatus(400);
      return;
    }
    res.sendStatus(200);
  });
});

app.get('/api/recipes', (req, res) => {
  controllers.getAllRecipes((err, recipes) => {
    if (err) {
      res.sendStatus(400);
      return;
    }
    res.status(200).send(recipes);
  });
});

app.listen(PORT, () => {
  console.log(`Listening at localhost on port ${PORT}`);
});
