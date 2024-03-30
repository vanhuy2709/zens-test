import axios from 'axios';

import {
  FETCH_ALL_JOKES_ERROR,
  FETCH_ALL_JOKES_PENDING,
  FETCH_ALL_JOKES_SUCCESS
} from '../constants/joke.constant';

const JOKE_URL = 'http://localhost:8080';

// Get all Jokes
export const getAllJoke = () => {
  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: FETCH_ALL_JOKES_PENDING,
      })

      // Success
      let response = await axios.get(JOKE_URL);

      return dispatch({
        type: FETCH_ALL_JOKES_SUCCESS,
        payload: response.data.data
      })

    } catch (error) {
      return dispatch({
        type: FETCH_ALL_JOKES_ERROR,
        error
      })
    }

  }
}
