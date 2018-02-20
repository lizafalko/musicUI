import { combineReducers } from 'redux';
import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './filterTracks';

export const reducer = combineReducers({
  tracks,
  playlists,
  filterTracks
})

export default reducer;
