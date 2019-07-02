import React from 'react';
import PropTypes from 'prop-types';
import d3Map from '../visualization/d3Map';
import { width, height } from '../visualization/d3Map.config';

export default function MapView({ data }) {
  return (
    <svg width={width} height={height}>
      <path d={d3Map(data)} stroke="blue" strokeWidth="1" fill="none" />
    </svg>
  );
}

MapView.propTypes = { data: PropTypes.arrayOf(PropTypes.object).isRequired };
