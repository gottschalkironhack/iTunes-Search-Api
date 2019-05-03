import {
  DELETE_BOOKMARK_SONG,
} from './actionTypes';

const deleteBookMark = id => ({
  type: DELETE_BOOKMARK_SONG,
  id,
});

export default deleteBookMark;
