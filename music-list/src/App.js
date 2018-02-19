import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  addTrack() {
    console.log('addTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }

  findTrack() {
    console.log('findTrack', this.searchInput.value);
    this.props.onFindTrack(this.trackInput.value);
  }

  render() {
    console.log(this.props.tracks);
    return (
      <div>
        <div>
          <input type="text" ref={(input) => { this.trackInput = input }} />
          <button onClick={this.addTrack.bind(this)}>Add track</button>
        </div>
        <div>
          <input type="text" ref={(input) => { this.searchInput = input }} />
          <button onClick={this.findTrack.bind(this)}>Find track</button>
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
    tracks: state.tracks
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
      dispatch({ type: 'FIND_TRACK', payload: name });
    }
  })
)(App);

//connect() принимает две функции в качестве аргументов и затем возвращаем компонент, который обернули в провайдер
