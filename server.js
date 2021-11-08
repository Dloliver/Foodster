// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = mongoose.connection;
require('dotenv').config();
const MONGODB_URI  = process.env.MONGODB_URI

const app = express();

app.use(express.json());
app.use(cors());

// Controller connection
const foodController = require('./controllers/food.js')
app.use('/foodster', foodController)

// Listener and Mongoose connection
app.listen(process.env.PORT, () => {
  console.log('Listening to Foodster app...');
})
// Connect to Mongo
mongoose.connect(MONGODB_URI  ,  { useNewUrlParser: true});
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// mongoose.connect('mongodb+srv://jamie:yeehaw@sei.7fx5p.mongodb.net/foodster?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
  console.log('connected to mongod...');
})
