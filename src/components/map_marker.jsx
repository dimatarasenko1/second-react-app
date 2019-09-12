import React, { Component } from 'react';

class MapMarker extends Component {
  render() {
    return (
      <div className="marker">{this.props.name}</div>
    );
  }
}

export default MapMarker;
