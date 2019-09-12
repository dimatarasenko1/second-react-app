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
    let result = flats.filter((flat) => {
      return flat.name === this.state.activeFlat;
    });
    console.log(result);
    return result;
  }

  changeActive = (name) => {
    this.setState({
      activeFlat: name
    });
  }

  render() {
    return (
      <div>
        <FlatList flats={flats} activeFlat={this.state.activeFlat} changeActive={this.changeActive} />
        <MapComponent activeFlat={this.getActiveFlat()} />
      </div>
    );
  }
}

export default App;
