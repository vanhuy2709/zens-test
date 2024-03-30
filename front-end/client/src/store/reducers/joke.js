import Cookies from 'js-cookie';
import {
  FETCH_ALL_JOKES_ERROR,
  FETCH_ALL_JOKES_PENDING,
  FETCH_ALL_JOKES_SUCCESS,

  HANDLE_VOTE_ERROR,
  HANDLE_VOTE_PENDING,
  HANDLE_VOTE_SUCCESS
} from '../constants/joke.constant';

const initState = {
  pending: false,
  listJoke: null,
  isError: false,
  jokeContent: null,
  index: 0,

  vote: {
    pending: false,
    message: null,
    isError: false,
    listVote: [],
  }
}

const jokeReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ALL_JOKES_PENDING:
      state.pending = true;
      break;
    case FETCH_ALL_JOKES_ERROR:
      state.pending = false;
      state.isError = true;
      break;
    case FETCH_ALL_JOKES_SUCCESS:
      state.pending = false;
      state.isError = false;
      state.listJoke = action.payload;
      state.jokeContent = state.listJoke[state.index];
      break;

    case HANDLE_VOTE_PENDING:
      state.vote.pending = true;
      break;
    case HANDLE_VOTE_ERROR:
      state.vote.pending = false;
      state.vote.isError = true;
      break;
    case HANDLE_VOTE_SUCCESS:
      state.vote.pending = false;
      state.vote.isError = false;
      state.vote.message = action.payload;
      state.vote.listVote.push(state.jokeContent);

      Cookies.set('vote', JSON.stringify(state.vote.listVote), { expires: 7 });

      state.index++;
      state.jokeContent = state.listJoke[state.index];
      break;

    default:
      break;
  }

  return { ...state };
}

export default jokeReducer;