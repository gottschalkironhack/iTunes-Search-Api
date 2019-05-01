import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../storeConfig/history';
import songs from './songs';
import errors from './errors';
import success from './success';
import fetching from './fetching';

export default combineReducers({
  router: connectRouter(history),
  songs,
  errors,
  success,
  fetching,
});
