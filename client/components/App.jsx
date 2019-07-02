import React, { Component } from 'react';
import { getData, postFile } from '../api/api';
import MapView from './MapView';
import Inputs from './Inputs';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      drawing: false,
      loading: true,
      mapLength: 0,
      elevationLength: 0,
      dimension: window.innerWidth * 0.5,
    };
    this.computeLengths = this.computeLengths.bind(this);
    this.toggleDrawing = this.toggleDrawing.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    window.onresize = this.resizeDimension.bind(this);
  }

  componentDidMount() {
    getData()
      .then(data => this.setState({ data, loading: false }))
      .catch(err => console.log('error setting state', err));
  }

  computeLengths() {
    // there may be a possible performance improvement from not calculating this every time
    const mapLength = document.querySelector('#map').getTotalLength();
    const elevationLength = document.querySelector('#elevation').getTotalLength();
    this.setState({ mapLength, elevationLength });
  }

  toggleDrawing() {
    const { drawing } = this.state;
    this.setState({ drawing: !drawing });
    this.computeLengths();
  }

  uploadFile(e) {
    const [file] = e.target.files;
    this.setState({ loading: true });
    postFile(file)
      .then(data => this.setState({ data, drawing: false, loading: false }))
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
      data, drawing, loading, mapLength, elevationLength, dimension,
    } = this.state;
    return (
      <div>
        {loading ? <div className="loading">Loading...</div>
          : (
            <MapView
              data={data}
              drawing={drawing}
              mapLength={mapLength}
              elevationLength={elevationLength}
              dimension={dimension}
            />
          )}
        <Inputs play={this.toggleDrawing} upload={this.uploadFile} />
      </div>
    );
  }
}
