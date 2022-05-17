const express = require('express');
const bodyParser = require('body-parser');
const getAllDevs = require('./middleware/getAllDevs')

const app = express();
app.use(bodyParser.json());


const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/devs', getAllDevs);

app.listen(PORT, () => {
  console.log('Online');
});