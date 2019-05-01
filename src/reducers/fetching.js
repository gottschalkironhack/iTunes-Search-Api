import {
  FETCH_SONGS_BEGIN,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  status: false,
};

export default function fetching(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS_BEGIN:
      return {
        ...state,
        status: true,
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        status: false,
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
}
