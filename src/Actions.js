import React, { PureComponent, PropTypes } from 'react';
import './Actions.css';

class Actions extends PureComponent {
  render() {
    return (
      <div className="Actions">
        {!this.props.playing && (
          <button type='button' onClick={this.props.onPlay} className='Actions-item'>
            <svg title="Počni" width={50} height={50}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/icons.svg#play`} />
            </svg>
          </button>
        )}
        {this.props.playing && !this.props.paused && (
          <button type='button' onClick={this.props.onPause} className='Actions-item'>
            <svg title="Pauziraj" width={50} height={50}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/icons.svg#pause`} />
            </svg>
          </button>
        )}
        {this.props.paused && (
          <button type='button' onClick={this.props.onResume} className='Actions-item'>
            <svg title="Počni" width={50} height={50}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/icons.svg#play`} />
            </svg>
          </button>
        )}
        {this.props.playing && (
          <button type='button' onClick={this.props.onStop} className='Actions-item'>
            <svg title="Zaustavi" width={50} height={50}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/icons.svg#stop`} />
            </svg>
          </button>
        )}
      </div>
    );
  }
}

Actions.propTypes = {
  playing: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onResume: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
};

export default Actions;
