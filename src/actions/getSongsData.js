import {
  FETCH_SONGS_BEGIN,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
} from './actionTypes';
import { getSongsList } from '../services/itunesApi';
import { handleApiErrors } from './helpers/handleApiErrors';
import { resetApiErrors, setApiErrors } from './apiErrors';
import { resetApiSuccess } from './apiSuccess';

const fetchSongsBegin = () => ({
  type: FETCH_SONGS_BEGIN,
});

const fetchSongsSuccess = songs => ({
  type: FETCH_SONGS_SUCCESS,
  songs,
});

const fetchSongsFailure = () => ({
  type: FETCH_SONGS_FAILURE,
});

export const getSongsData = (searchTerm) => (dispatch) => {
  dispatch(resetApiErrors());
  dispatch(fetchSongsBegin());
  dispatch(resetApiSuccess());
  getSongsList(searchTerm)
    .then(songs => {
      dispatch(fetchSongsSuccess(songs));
    })
    .catch((error) => {
      dispatch(fetchSongsFailure());
      const errorMessage = handleApiErrors(error, 'Data could not be retrieved');
      dispatch(setApiErrors(errorMessage));
    });
};
