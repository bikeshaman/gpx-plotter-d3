export default (mapLength, elevationLength) => `
  .visualizations {
    stroke: rgb(243, 22, 184);
    fill: none;
  }

  .elevation {
    fill: rgba(243, 22, 184, 0.2);
  }

  .map.playing {
    stroke-dashoffset: ${-1 * mapLength};
    stroke-dasharray: ${mapLength};
    animation: drawMap 5s infinite;
    animation-fill-mode: forwards;
  }

  .elevation.playing {
    stroke-dashoffset: ${-1 * elevationLength};
    stroke-dasharray: ${elevationLength};
    animation: drawElevation 5s infinite;
    animation-fill-mode: forwards;
  }

  @keyframes drawMap {
    from {
      stroke-dashoffset: ${mapLength};
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes drawElevation {
    from {
      stroke-dashoffset: ${elevationLength};
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;
