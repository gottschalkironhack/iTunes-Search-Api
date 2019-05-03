import {
  BOOKMARK_SONG,
  FETCH_SONGS_SUCCESS,
  DELETE_BOOKMARK_SONG,
} from '../actions/actionTypes';

const initialState = {
  songs: [],
  bookMarks: [],
};

export default function songs(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.songs,
      };
    case BOOKMARK_SONG:
    return {
      ...state,
      bookMarks: [...state.bookMarks, action.id],
    };

    case DELETE_BOOKMARK_SONG:
    return {
      ...state,
      bookMarks: [
        ...state.bookMarks.filter(bookMark => bookMark !== action.id),
      ],
    };

    default:
      return state;
  };
};
