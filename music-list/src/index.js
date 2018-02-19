// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore } from 'redux';

function playlist(state = [], action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);
const addTrackBtn = document.querySelectorAll('.addTrack')[0]; //нашли кнопку
const trackInput = document.querySelectorAll('.trackInput')[0]; //нашли инпут
const list = document.querySelectorAll('.list')[0]; //нашли список

store.subscribe(() => {
  list.innerHTML = ''; //очистили
  trackInput.value = ''; //очистили изначальные значения
  store.getState().forEach( track => {
    const li = document.createElement('li');
    li.textContent = track;
    list.appendChild(li); //сделали вывод в список
  })
})

addTrackBtn.addEventListener('click', () => {
  const trackName = trackInput.value;
  store.dispatch({ type: 'ADD_TRACK', payload: trackName }); //повесили клик на кнопку, чтобы добавить трек 
})
