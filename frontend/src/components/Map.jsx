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
      : undefined;

    this.google = window.google;
    this.state = {
      position: prevPosition,
      origin: new this.google.maps.LatLng(-34.7108688, -58.28008269999999),
    };

    this.map = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    if (!this.state.position) {
      this.changeLocation(this.props.locality);
    }
  }

  changeLocation(locality) {
    Axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${locality}+Argentina&key=AIzaSyBv2vHmt_qxUUL8SilJ_jwL3d1h0Lr90Jc`)
      .then((res) => {
        const { location } = res.data.results[0].geometry;
        const latLng = new this.google.maps.LatLng(location.lat, location.lng);
        this.map.current.panTo(latLng);
      });
  }

  handleClick(event) {
    const position = [event.latLng.lat(), event.latLng.lng()];
    const latLng = new this.google.maps.LatLng(position[0], position[1]);
    this.map.current.panTo(latLng);
    this.setState({ position });
    const stringPosition = `${event.latLng.lat()}+${event.latLng.lng()}`;
    this.props.changePosition(stringPosition);
  }

  render() {
    const { position } = this.state;
    const marker = position
      ? <Marker position={new this.google.maps.LatLng(position[0], position[1])} />
      : null;

    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={this.state.origin}
        onClick={this.handleClick}
        ref={this.map}
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
    containerElement: <div className="col-md-12" style={{ height: '330px' }} />,
    mapElement: <div className="map-container" style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(Map);

export default MapC;
