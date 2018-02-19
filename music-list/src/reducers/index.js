import { combineReducers } from 'redux';
import tracks from './tracks';
import playlists from './playlists';

export const reducer = combineReducers({
  tracks,
  playlists
})

export default reducer;
