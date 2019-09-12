import React, { Component } from 'react';

import FlatList from './flat_list';
import MapComponent from './map_component';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFlat: null
    };
  }

  getActiveFlat = () => {
    const { activeFlat } = this.state;
    const result = flats.filter((flat) => {
      return flat.name === activeFlat;
    });
    return result;
  }

  changeActive = (name) => {
    this.setState({
      activeFlat: name
    });
  }

  render() {
    const { activeFlat } = this.state;
    return (
      <div>
        <FlatList flats={flats} activeFlat={activeFlat} changeActive={this.changeActive} />
        <MapComponent activeFlat={this.getActiveFlat()} />
      </div>
    );
  }
}

export default App;
