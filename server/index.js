const path = require('path');
const db = require('../database/index');
const express = require('express');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.listen(PORT, () => {
  console.log(`Listening at localhost on port ${PORT}`);
});
