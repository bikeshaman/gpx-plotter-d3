import React, { Component } from 'react';
import MapView from './MapView';

export default class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('http://localhost:4000/data')
      .then(response => response.json())
      .catch(err => console.log('error fetching data', err))
      .then(data => this.setState({ data }))
      .catch(err => console.log('error setting state', err));
  }

  render() {
    const { data } = this.state;
    return <MapView data={data} />;
  }
}
