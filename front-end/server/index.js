// Import Library
const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// Import Router
const jokeRouter = require('./app/routes/joke.route');
const voteRouter = require('./app/routes/vote.route');

// Initial App & Port
const app = express();
const port = process.env.PORT || 8000;

// Config
app.use(cors());
app.options('*', cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Connect MongoDB successfully'))
  .catch(err => console.log(err))

// Use Router
app.use('/vote', voteRouter);
app.use('/', jokeRouter);

// Start App
app.listen(port, () => {
  console.log('App running on port', port);
})