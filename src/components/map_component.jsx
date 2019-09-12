import React from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from './map_marker';

const MapComponent = (props) => {
  const defaultProps = {
    center: {
      lat: 48.88184,
      lng: 2.343371
    },
    zoom: 12
  };
  const { activeFlat } = props;
  let marker = null;
  if (activeFlat.length > 0) {
    marker = {
      lng: activeFlat[0].lng,
      lat: activeFlat[0].lat
    };
  }
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBtC7s2YyFzYQavxCXH4lwPs3o5JjcIXgY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        { marker ? <MapMarker lng={marker.lng} lat={marker.lat} /> : null }
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
