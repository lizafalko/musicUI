import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getTracks } from './actions/tracks';
import Menu from './Menu';

const App = ({ tracks, onAddTrack, onFindTrack, onGetTracks, ownProps }) => {
  console.log('ownProps', ownProps);
  let trackInput = '';
  let searchInput = '';

  const addTrack = () => {
      console.log('addTrack', trackInput.value);
      onAddTrack(trackInput.value);
      trackInput.value = '';
  }

  const findTrack = () => {
    console.log('findTrack', searchInput.value);
    onFindTrack(searchInput.value);
  }

  return (
      <div className="input">
        <Menu />
        <div>
          <input type="text" className="input__input" ref={(input) => { this.trackInput = input }} />
          <button className="input__button" onClick={this.addTrack.bind(this)}>Add track</button>
        </div>
        <div>
          <input type="text" className="input__input" ref={(input) => { this.searchInput = input }} />
          <button className="input__button" onClick={this.findTrack.bind(this)}>Find track</button>
        </div>
        <div>
          <button className="input__button input__button--no-left" onClick={this.props.onGetTracks}>Get Tracks</button>
        </div>
        <ul>
          {tracks.map((track, index) =>
            <li key={index}>
            <Link to={`/tracks/${track.id}`}>{track.name}</Link>
            </li>
          )}
        </ul>
      </div>
    );
  }

export default connect(
  (state, ownProps) => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)) //проверяем входит ли имя в include
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: 'ADD_TRACK', payload }); //добавили метод, который позволяет добавить трек
    },
    onFindTrack: (name) => {
      console.log('name', name);
      dispatch({ type: 'FIND_TRACK', payload: name });
    },
    onGetTracks: () => {
      dispatch(getTracks());
    }
  })
)(App);

//connect() принимает две функции в качестве аргументов и затем возвращаем компонент, который обернули в провайдер
