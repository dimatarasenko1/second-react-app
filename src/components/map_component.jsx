import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import flats from '../../data/flats';

import MapMarker from './map_marker';

class MapComponent extends Component {

  static defaultProps = {
    zoom: 12
  };

  constructor(props) {
    super(props);
    this.item = flats[Math.floor(Math.random()*flats.length)];
    this.center = {
      lat: this.item.lat,
      lng: this.item.lng
    };
  }

  render() {
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBtC7s2YyFzYQavxCXH4lwPs3o5JjcIXgY" }}
          defaultCenter={this.center}
          defaultZoom={this.props.zoom}
         >
          {flats.map(flat => <MapMarker name={flat.name} lat={flat.lat} lng={flat.lng} key={flat.name} />)}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapComponent;
