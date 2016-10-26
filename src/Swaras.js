import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import setPTimeout from 'pauseable-timeout';
import { SWARAS, LYRICS } from './constants';
import './Swaras.css';

class Swaras extends Component {
  state = {
    current: { pos: 0 },
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.playing && nextProps.playing) {
      this._updating();
    } else if (!this.props.paused && nextProps.paused) {
      this._timeout.pause();
    } else if (this.props.paused && !nextProps.paused) {
      this._timeout.resume();
    } else if (this.props.playing && !nextProps.playing) {
      this._timeout.abort();
      this.setState({
        current: { pos: 0 },
      });
    }
  }

  _updating = () => {
    const nextIndex = LYRICS.indexOf(this.state.current) + 1;
    const next = LYRICS[nextIndex];
    this._timeout = setPTimeout(() => {
      this.setState({ current: next });
      if (nextIndex >= LYRICS.length - 1) {
        setTimeout(() => {
          this.setState({ current: { pos: 0 } });
        }, 300 / this.props.rate);
        this.props.onEnd();
      } else {
        this._updating();
      }
    }, (next.pos - this.state.current.pos) * (1000 / this.props.rate));
  };

  render() {
    const { current } = this.state;

    return (
      <ol className={classNames('Swaras', this.props.rate > 0.5 && 'faster-transition')}>
        {[0, 1, 2].map(octave => SWARAS.map((swara, index) => {
          const isCurrent =
            current.octave === octave &&
            current.swara === swara;
          return (
            <li
              key={index * (octave + 1)}
              className={classNames('Swaras-item', isCurrent && 'active')}
            >
              {swara}
            </li>
          );
        }))}
      </ol>
    );
  }
}

Swaras.propTypes = {
  playing: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  rate: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
  onEnd: PropTypes.func.isRequired,
};

export default Swaras;
