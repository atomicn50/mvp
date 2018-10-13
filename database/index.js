const mongoose = require('mongoose');

const mongooseURI = 'mongodb://localhost:27017/myapp';

mongoose.connect(mongooseURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongoose connected');
});

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: Array,
});
