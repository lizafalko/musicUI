const initialState = [
    'My fave playlist',
    'My new playlist'
];

export default function playlists(state = initialState, action) {
  if (action.type === 'ADD_PLAYLIST') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'DELETE_PLAYLIST') {
      return state;
  }
  return state;
}
