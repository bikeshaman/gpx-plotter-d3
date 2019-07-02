import React from 'react';
import PropTypes from 'prop-types';

export default function Inputs({ play, upload }) {
  return (
    <form>
      <label className="play custom-button" htmlFor="play" tabIndex="0">
        Play/Stop
        <span className="fas fa-play" />
        /
        <span className="fas fa-stop" />
        <input id="play" className="play" type="button" onClick={play} tabIndex="0" />
      </label>
      <label className="upload custom-button" htmlFor="upload" tabIndex="0">
        Upload (.gpx only)
        <span className="fas fa-upload" />
        <input id="upload" className="file-input" type="file" accept=".gpx" onChange={upload} />
      </label>
    </form>
  );
}

Inputs.propTypes = {
  play: PropTypes.func.isRequired,
  upload: PropTypes.func.isRequired,
};
