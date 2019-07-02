export default (mapLength, elevationLength) => `
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
