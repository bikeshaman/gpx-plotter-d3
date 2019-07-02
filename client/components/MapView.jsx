import React from 'react';
import PropTypes from 'prop-types';
import { path, elevation } from '../visualization/d3Map';
import animations from '../styles/animations';

export default function MapView({
  data, drawing, mapLength, elevationLength, dimension,
}) {
  return (
    <div className="visualizations">
      <style>{animations(mapLength, elevationLength)}</style>
      <svg className="map" width={dimension} height={dimension}>
        <path
          id="map"
          d={path(data, dimension)}
          className={drawing ? 'map drawing' : 'map'}
        />
      </svg>
      <svg className="elevation" width={dimension} height={dimension}>
        <path
          id="elevation"
          d={elevation(data, dimension)}
          className={drawing ? 'elevation drawing' : 'elevation'}
        />
      </svg>
    </div>
  );
}

MapView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  drawing: PropTypes.bool.isRequired,
  mapLength: PropTypes.number.isRequired,
  elevationLength: PropTypes.number.isRequired,
  dimension: PropTypes.number.isRequired,
};
