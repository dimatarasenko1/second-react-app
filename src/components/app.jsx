import React, { Component } from 'react';
import FlatList from './flat_list';
import MapComponent from './map_component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <FlatList />
        <MapComponent />
      </div>
    );
  }
}

export default App;
