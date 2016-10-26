import React, { Component } from 'react';
import { Howl } from 'howler';
import classNames from 'classnames';
import setPTimeout from 'pauseable-timeout';
import { SWARAS, LYRICS } from './constants';
import './App.css';

const RATE_NAME = {
  0.5: 'Sporo',
  0.75: 'Lagano',
  1: 'Normalno',
};

class App extends Component {
  state = {
    playing: false,
    paused: false,
    current: { pos: 0 },
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

  _play = () => {
    this.setState({ playing: true });
    this._song.play();
    this._updating();
  };

  _pause = () => {
    this._song.pause();
    this._timeout.pause();
    this.setState({ paused: true });
  };

  _resume = () => {
    this._song.play();
    this._timeout.resume();
    this.setState({ paused: false });
  };

  _stop = () => {
    this._song.stop();
    this._timeout.abort();
    this.setState({
      playing: false,
      paused: false,
      current: { pos: 0 },
    });
  };

  _updating = () => {
    const nextIndex = LYRICS.indexOf(this.state.current) + 1;
    const next = LYRICS[nextIndex];
    this._timeout = setPTimeout(() => {
      this.setState({ current: next });
      if (nextIndex >= LYRICS.length - 1) {
        this._stop();
      } else {
        this._updating();
      }
    }, (next.pos - this.state.current.pos) * (1000 / this.state.rate));
  };

  render() {
    const { current } = this.state;

    return (
      <div className='App'>
        <div className='App-header'>
          <h1>{'Mamavatu'}</h1>
        </div>
        <ol className='App-swaras'>
          {[0, 1, 2].map(octave => SWARAS.map((swara, index) => {
            const isCurrent =
              current.octave === octave &&
              current.swara === swara;

            return (
              <li
                key={index * (octave + 1)}
                className={classNames('App-swara', isCurrent && 'active')}
              >
                {swara}
              </li>
            );
          }))}
        </ol>

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

        <div className="App-actions">
          {!this.state.playing && (
            <button type='button' onClick={this._play} className='App-action'>
              <svg title="Počni" width={50} height={50}>
                <use xlinkHref={`${process.env.PUBLIC_URL}/icons.svg#play`} />
              </svg>
            </button>
          )}
          {this.state.paused && (
            <button type='button' onClick={this._resume} className='App-action'>
              <svg title="Počni" width={50} height={50}>
                <use xlinkHref={`${process.env.PUBLIC_URL}/icons.svg#play`} />
              </svg>
            </button>
          )}
          {this.state.playing && !this.state.paused && (
            <button type='button' onClick={this._pause} className='App-action'>
              <svg title="Pauziraj" width={50} height={50}>
                <use xlinkHref={`${process.env.PUBLIC_URL}/icons.svg#pause`} />
              </svg>
            </button>
          )}
          {this.state.playing && (
            <button type='button' onClick={this._stop} className='App-action'>
              <svg title="Zaustavi" width={50} height={50}>
                <use xlinkHref={`${process.env.PUBLIC_URL}/icons.svg#stop`} />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
