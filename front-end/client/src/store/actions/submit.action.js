import axios from 'axios';
import {
  HANDLE_VOTE_ERROR,
  HANDLE_VOTE_PENDING,
  HANDLE_VOTE_SUCCESS
} from '../constants/joke.constant';

const VOTE_URL = 'http://localhost:8080/vote';

export const handleVoteJoke = (jokeId, vote) => {

  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: HANDLE_VOTE_PENDING
      })

      // Success
      const newVote = {
        joke: jokeId,
        vote: vote
      }
      const headers = {
        'Content-Type': 'application/json'
      }
      let response = await axios.post(VOTE_URL, newVote, { headers });

      return dispatch({
        type: HANDLE_VOTE_SUCCESS,
        payload: response.data
      })

    } catch (error) {

      // Error
      return dispatch({
        type: HANDLE_VOTE_ERROR,
        error
      })
    }
  }
}