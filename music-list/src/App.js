import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  addTrack() {
    console.log('addTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }

  findTrack() {
    console.log('findTrack', this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value);
  }

  render() {
    console.log(this.props.tracks);
    return (
      <div className="input">
        <div>
          <input type="text" className="input__input" ref={(input) => { this.trackInput = input }} />
          <button className="input__button" onClick={this.addTrack.bind(this)}>Add track</button>
        </div>
        <div>
          <input type="text" className="input__input" ref={(input) => { this.searchInput = input }} />
          <button className="input__button" onClick={this.findTrack.bind(this)}>Find track</button>
        </div>
        <ul>
          {this.props.tracks.map((track, index) =>
            <li key={index}>{track.name}</li> //получили и вывели на экран значения из state
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
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
    }
  })
)(App);

//connect() принимает две функции в качестве аргументов и затем возвращаем компонент, который обернули в провайдер
