// Import Library
const express = require('express');

// Import Controllers
const voteController = require('../controllers/vote.controller');

// Router Initial
const router = express.Router();

// Router method
// Get all Votes
router.get('/', voteController.getAllVote);

// Create Vote
router.post('/', voteController.createVote);


module.exports = router;
