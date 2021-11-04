// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Controller connection
const foodController = require('./controllers/food.js')
app.use('/food', foodController)

// Listener and Mongoose connection
app.listen(3000, () => {
  console.log('Listening to Foodster app...');
})
mongoose.connect('mongodb://localhost:27017/foodster')
mongoose.connection.once('open', () => {
  console.log('connected to mongod...');
})
