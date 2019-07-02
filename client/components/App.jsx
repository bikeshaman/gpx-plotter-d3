import React, { Component } from 'react';
import { getData, postFile } from '../api/api';
import MapView from './MapView';
import Inputs from './Inputs';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      playing: false,
      mapLength: 0,
      elevationLength: 0,
      dimension: window.innerWidth * 0.5,
    };
    this.computeLengths = this.computeLengths.bind(this);
    this.togglePlaying = this.togglePlaying.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    window.onresize = this.resizeDimension.bind(this);
  }

  componentDidMount() {
    getData()
      .then(data => this.setState({ data }))
      .catch(err => console.log('error setting state', err));
  }

  computeLengths() {
    // there may be a possible performance improvement from not calculating this every time
    const mapLength = document.querySelector('#map').getTotalLength();
    const elevationLength = document.querySelector('#elevation').getTotalLength();
    this.setState({ mapLength, elevationLength });
  }

  togglePlaying() {
    const { playing } = this.state;
    this.setState({ playing: !playing });
    this.computeLengths();
  }

  uploadFile(e) {
    const [file] = e.target.files;
    postFile(file)
      .then(data => this.setState({ data }))
      .catch(err => console.log('error updating state', err))
      .then(this.computeLengths)
      .catch(err => console.log('error computing lengths', err))
      .then(() => document.querySelector('form').reset());
  }

  resizeDimension() {
    this.setState({ dimension: window.innerWidth * 0.5 });
  }

  render() {
    const {
      data, playing, mapLength, elevationLength, dimension,
    } = this.state;
    return (
      <div>
        <MapView
          data={data}
          playing={playing}
          mapLength={mapLength}
          elevationLength={elevationLength}
          dimension={dimension}
        />
        <Inputs play={this.togglePlaying} upload={this.uploadFile} />
      </div>
    );
  }
}
