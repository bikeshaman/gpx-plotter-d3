import React from 'react';
import PropTypes from 'prop-types';
import d3Map from '../visualization/d3Map';
import { width, height } from '../visualization/d3Map.config';

export default function MapView({ data, playing }) {
  return (
    <svg width={width} height={height}>
      <path
        d={d3Map(data)}
        className={playing ? 'map playing' : 'map'}
      />
    </svg>
  );
}

MapView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  playing: PropTypes.bool.isRequired,
};
