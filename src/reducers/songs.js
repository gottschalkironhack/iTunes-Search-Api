import {
  BOOKMARK_SONG,
  FETCH_SONGS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  songs: [],
};

export default function songs(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.songs,
      };
    case BOOKMARK_SONG:

    default:
      return state;
  }
}
