import React from 'react';
import Leaflet from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


Leaflet.Icon.Default.imagePath =
  '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const LeafletMap = (props) => {
  const markers = props.markers;

  return (
    <Map center={markers[0].coordinates} zoom={13} style={{ height: '500px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />

      {
        markers.map((marker) => (
          <Marker position={marker.coordinates}>
            <Popup>{marker.title}</Popup>
          </Marker>
        ))
      }
    </Map>
  );
}

export default LeafletMap;