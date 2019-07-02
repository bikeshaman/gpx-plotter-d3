import { line, curveLinear } from 'd3';
import { scaleLinear } from 'd3-scale';
import { min, max } from 'd3-array';
import { width, height } from './d3Map.config';

export function path(data) {
  const x = coord => coord.lon;
  const y = coord => coord.lat;

  const xScale = scaleLinear()
    .domain([min(data, x), max(data, x)])
    .range([0, width]);
  const yScale = scaleLinear()
    .domain([min(data, y), max(data, y)])
    .range([height, 0]);

  const drawPath = line()
    .x(d => xScale(d.lon))
    .y(d => yScale(d.lat))
    .curve(curveLinear);

  return drawPath(data);
}

export function elevation(data) {
  const ele = coord => coord.ele;

  const xScale = scaleLinear()
    .domain([0, data.length])
    .range([0, width * 1.5]);
  const yScale = scaleLinear()
    .domain([min(data, ele), max(data, ele)])
    .range([height, 0]);

  const drawElevation = line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d.ele))
    .curve(curveLinear);

  return drawElevation(data);
}
