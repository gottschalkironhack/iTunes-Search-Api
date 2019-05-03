import {
  BOOKMARK_SONG,
} from './actionTypes';

const bookMarkAsFavorite = id => ({
  type: BOOKMARK_SONG,
  id,
});

export default bookMarkAsFavorite;
