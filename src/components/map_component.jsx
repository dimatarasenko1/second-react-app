import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from './map_marker';

class MapComponent extends Component {

  static defaultProps = {
    center: {
      lat: 48.88184,
      lng: 2.343371
    },
    zoom: 12
  };

  constructor(props) {
    super(props);
  }

  render() {
    const activeFlat = this.props.active;
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBtC7s2YyFzYQavxCXH4lwPs3o5JjcIXgY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
         >
          { activeFlat ? <MapMarker lng={activeFlat.lng} lat={activeFlat.lat} /> : null }
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapComponent;
