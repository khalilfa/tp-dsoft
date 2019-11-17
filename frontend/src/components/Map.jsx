import React from 'react';
import Axios from 'axios';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';
import '../css/create-provider.css';

class Map extends React.Component {
  constructor(props) {
    super(props);

    const prevPosition = props.position
      ? props.position.split('+')
      : [];

    this.google = window.google;
    this.state = {
      position: prevPosition,
      origin: new this.google.maps.LatLng(-34.7108688, -58.28008269999999),
      locality: props.locality,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  handleLocation() {
    const { locality } = this.state;
    Axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${locality}+Argentina&key=AIzaSyBv2vHmt_qxUUL8SilJ_jwL3d1h0Lr90Jc`)
      .then((res) => res.data.results)
      .then((res) => res[0].geometry.location)
      .then((loc) => {
        this.setState({ origin: new this.google.maps.LatLng(loc.lat, loc.lng) });
      })
      .catch((error) => console.log(error));
  }

  handleClick(event) {
    const position = [event.latLng.lat(), event.latLng.lng()];
    this.setState({ position });
    const stringPosition = `${event.latLng.lat()}+${event.latLng.lng()}`;
  }

  render() {
    const { position } = this.state;
    const marker = position
      ? <Marker position={new this.google.maps.LatLng(position[0], position[1])} />
      : null;

    return (
      <GoogleMap
        className="map-container"
        defaultZoom={14}
        defaultCenter={this.state.origin}
        onClick={this.handleClick}
        center={this.state.origin}
      >
        {marker}
      </GoogleMap>
    );
  }
}

const MapC = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/jskey=%REACT_APP_GMAPS_KEY%?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div className="col-md-12" style={{ height: '100%' }} />,
    containerElement: <div className="col-md-12" style={{ height: '350px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(Map);

export default MapC;
