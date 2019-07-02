import React, { Component } from 'react';
import origin from '../config';
import MapView from './MapView';
import Inputs from './Inputs';

export default class App extends Component {
  constructor() {
    super();
    this.state = { data: [], playing: false };
    this.togglePlaying = this.togglePlaying.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  componentDidMount() {
    fetch(`${origin}/data`)
      .then(response => response.json())
      .catch(err => console.log('error fetching data', err))
      .then(data => this.setState({ data }))
      .catch(err => console.log('error setting state', err));
  }

  togglePlaying() {
    const { playing } = this.state;
    this.setState({ playing: !playing });
  }

  uploadFile(e) {
    const [file] = e.target.files;
    fetch(`${origin}/data`, {
      method: 'POST',
      body: file,
      headers: {
        'Content-Type': 'text/xml',
      },
    }).then(response => response.json())
      .catch(err => console.log('error posting file', err))
      .then(data => this.setState({ data }))
      .catch(err => console.log('error updating state', err));
  }

  render() {
    const { data, playing } = this.state;
    return (
      <div>
        <MapView data={data} playing={playing} />
        <Inputs play={this.togglePlaying} upload={this.uploadFile} />
      </div>
    );
  }
}
