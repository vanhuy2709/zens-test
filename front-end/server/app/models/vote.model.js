const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  joke: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Joke',
    required: true
  },
  vote: {
    type: String
  }
})

module.exports = mongoose.model('Vote', voteSchema);