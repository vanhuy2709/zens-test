// Import Library
const express = require('express');

// Import Controllers
const jokeController = require('../controllers/joke.controller');

// Router Initial
const router = express.Router();

// Router method
// Get all Jokes
router.get('/', jokeController.getAllJoke);

// Get Joke by Id
router.get('/:jokeId', jokeController.getJokeById);

// Create Joke
router.post('/', jokeController.createJoke);

// Delete Joke by ID
router.delete('/:jokeId', jokeController.deleteJokeById);

module.exports = router;