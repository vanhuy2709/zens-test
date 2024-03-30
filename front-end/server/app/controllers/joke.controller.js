const mongoose = require('mongoose');
const jokeModel = require('../models/joke.model');

// Get All Joke
const getAllJoke = async (req, res) => {
  try {
    const jokes = await jokeModel.find();

    if (jokes.length === 0) {
      return res.status(404).json({
        message: 'No Jokes exist'
      });
    }

    return res.status(200).json({
      message: 'Get all joke success',
      data: jokes
    })

  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}

// Get Joke by ID
const getJokeById = async (req, res) => {
  const jokeId = req.params.jokeId;

  if (!mongoose.Types.ObjectId.isValid(jokeId)) {
    return res.status(400).json({
      message: 'Joke ID is not valid'
    })
  }

  try {
    const joke = await jokeModel.findById(jokeId);

    if (!joke) {
      return res.status(404).json({
        message: 'Joke ID is not found'
      })
    }

    return res.status(200).json({
      message: 'Get Joke by ID success',
      data: joke
    })

  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}

// Create Joke
const createJoke = async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({
      message: 'Content is required'
    })
  }

  try {
    const newJoke = {
      content
    }

    await jokeModel.create(newJoke);

    return res.status(201).json({
      message: 'Create Joke content success'
    })

  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}

// Delete Joke by ID
const deleteJokeById = async (req, res) => {
  const jokeId = req.params.jokeId;

  if (!jokeId) {
    return res.status(400).json({
      message: 'No Joke to delete'
    })
  }
  if (!mongoose.Types.ObjectId.isValid(jokeId)) {
    return res.status(400).json({
      message: 'Joke ID is not valid'
    })
  }

  try {
    const joke = await jokeModel.findByIdAndDelete(jokeId);

    if (!joke) {
      return res.status(404).json({
        message: 'Joke ID is not found'
      })
    }

    return res.status(200).json({
      message: 'Delete Joke success'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}

module.exports = {
  createJoke,
  getAllJoke,
  getJokeById,
  deleteJokeById
}