import React from 'react';
import PropTypes from 'prop-types';
import { path, elevation } from '../visualization/d3Map';
import { width, height } from '../visualization/d3Map.config';
import animations from '../styles/animations';

export default function MapView({ data, playing, mapLength, elevationLength }) {
  return (
    <div className="visualizations">
      <style>{animations(mapLength, elevationLength)}</style>
      <svg width={width} height={height}>
        <path
          id="map"
          d={path(data)}
          className={playing ? 'map playing' : 'map'}
        />
      </svg>
      <svg width={width * 1.5} height={height}>
        <path
          id="elevation"
          d={elevation(data)}
          className={playing ? 'elevation playing' : 'elevation'}
        />
      </svg>
    </div>
  );
}

MapView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  playing: PropTypes.bool.isRequired,
  mapLength: PropTypes.number.isRequired,
  elevationLength: PropTypes.number.isRequired,
};
