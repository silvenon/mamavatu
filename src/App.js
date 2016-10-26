import React, { Component } from 'react';
import { Howl } from 'howler';
import Swaras from './Swaras';
import Actions from './Actions';
import { RATE_NAME } from './constants';
import './App.css';

class App extends Component {
  state = {
    playing: false,
    paused: false,
    rate: 0.5,
  };

  componentWillMount() {
    this._song = new Howl({
      src: [`${process.env.PUBLIC_URL}/song.mp3`],
      rate: this.state.rate,
      html5: true,
    });
  }

  _handleChangeRate = event => {
    const rate = parseFloat(event.target.value);
    this._song.rate(rate);
    this.setState({ rate });
  };

  _handleSwarasStart = timeout => {
    this._timeout = timeout;
  };

  _handleSwarasEnd = () => {
    this._song.once('end', this._stop);
  };

  _play = () => {
    this._song.play();
    this.setState({ playing: true });
  };

  _pause = () => {
    this._song.pause();
    this.setState({ paused: true });
  };

  _resume = () => {
    this._song.play();
    this.setState({ paused: false });
  };

  _stop = () => {
    this._song.stop();
    this.setState({
      playing: false,
      paused: false,
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>{'Mamavatu'}</h1>
        </div>

        <Swaras
          playing={this.state.playing}
          paused={this.state.paused}
          rate={this.state.rate}
          onStart={this._handleSwarasStart}
          onEnd={this._handleSwarasEnd}
        />

        <div className='App-rate'>
          <label>
            {'Brzina: '}{RATE_NAME[this.state.rate]}
          </label>
          <input
            type='range'
            min='0.5' max='1' step='0.25'
            value={this.state.rate}
            onChange={this._handleChangeRate}
          />
        </div>

        <Actions
          playing={this.state.playing}
          paused={this.state.paused}
          onPlay={this._play}
          onPause={this._pause}
          onResume={this._resume}
          onStop={this._stop}
        />
      </div>
    );
  }
}

export default App;
