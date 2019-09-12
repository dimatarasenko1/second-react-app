import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class MapComponent extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBtC7s2YyFzYQavxCXH4lwPs3o5JjcIXgY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
         />
      </div>
    );
  }
}

export default MapComponent;
