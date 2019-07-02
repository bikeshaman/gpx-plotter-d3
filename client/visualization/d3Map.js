import { line, curveLinear } from 'd3';
import { scaleLinear } from 'd3-scale';
import { min, max } from 'd3-array';
import { width, height } from './d3Map.config';

export default (data) => {
  const x = coord => coord.lon;
  const y = coord => coord.lat;

  const xScale = scaleLinear()
    .domain([min(data, x), max(data, x)])
    .range([0, width]);
  const yScale = scaleLinear()
    .domain([min(data, y), max(data, y)])
    .range([height, 0]);

  const drawLine = line()
    .x(d => xScale(d.lon))
    .y(d => yScale(d.lat))
    .curve(curveLinear);

  return drawLine(data);
};
