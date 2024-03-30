const mongoose = require('mongoose');
const voteModel = require('../models/vote.model');
const jokeModel = require('../models/joke.model');

const listVoteJoke = [];

// Get all Vote
const getAllVote = async (req, res) => {

  try {
    const listVote = await voteModel.find();

    return res.status(200).json({
      message: 'Get all Vote success',
      data: listVote
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
    })
  }
}


// Create Vote
const createVote = async (req, res) => {
  const { joke, vote } = req.body;

  if (!joke) {
    return res.status(400).json({
      message: 'Joke ID is required'
    })
  }
  if (!mongoose.Types.ObjectId.isValid(joke)) {
    return res.status(400).json({
      message: 'Joke ID is not valid',
    })
  }
  if (!vote) {
    return res.status(400).json({
      message: 'Voting is required'
    })
  }

  try {
    const checkJoke = await jokeModel.findById(joke);

    if (checkJoke) {
      const newVote = await voteModel.create({ joke, vote });

      // const { joke, ...others } = newVote;

      listVoteJoke.push(newVote.joke);

      // Save to cookie
      res.cookie('voting', JSON.stringify(listVoteJoke), {
        httpOnly: true,
        sameSite: 'strict',
      })

      return res.status(201).json({
        message: 'Create Vote success',
      })
    } else {
      return res.status(404).json({
        message: 'Joke is not found',

      })
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    })
  }
}


module.exports = {
  createVote,
  getAllVote
}