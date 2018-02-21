var mockApiData = [
  {
    id: 1,
    name: 'Mana Island – DOTS'
  },
  {
    id: 2,
    name: 'Mana Island – Кесарюке'
  },
  {
    id: 3,
    name: 'Mana Island – Кесарюке'
  },
  {
    id: 4,
    name: 'Mana Island – Кесарюке'
  },
  {
    id: 5,
    name: 'Mana Island – Кесарюке'
  }
];

export const getTracks = () => dispatch => {
  setTimeout(() => {
    console.log('I got tracks');
    dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData });
  }, 2000)
};
