import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';
import { compose, withProps } from 'recompose';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.google = window.google;
    this.state = {
      directions: null,
      duration: '',
      distance: '',
      origin: new this.google.maps.LatLng(-34.705819, -58.277358),
      destination: new this.google.maps.LatLng(-34.709311, -58.280571),
    };
  }

  componentDidMount() {
    const DirectionsService = new this.google.maps.DirectionsService();
    const DistanceMatrixService = new this.google.maps.DistanceMatrixService();
    const travelMode = this.google.maps.TravelMode.WALKING;

    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode,
    }, (result, status) => {
      if (status === this.google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });

    DistanceMatrixService.getDistanceMatrix(
      {
        origins: [this.state.origin],
        destinations: [this.state.destination],
        travelMode,
      }, (response, status) => {
        if (status === 'OK') {
          this.setState({
            duration: response.rows[0].elements[0].duration.text,
            distance: response.rows[0].elements[0].distance.value,
          });
        }
      },
    );
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={this.state.origin}
      >
        {this.state.directions && <DirectionsRenderer directions={this.state.directions} />}
        <Marker position={{ lat: -34.705535, lng: -58.274783 }} />

        <InfoBox
          defaultPosition={this.state.destination}
          options={{ closeBoxURL: '', enableEventPropagation: true }}
        >
          <div style={{ backgroundColor: 'grey', opacity: 0.90, padding: '10px', width: '80px' }}>
            <div style={{ fontSize: '16px', fontColor: 'white' }}>
              {this.state.duration}
              <br />
              {this.state.distance} mts
            </div>
          </div>
        </InfoBox>

      </GoogleMap>
    );
  }
}

const MapComponentC = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/jskey=%REACT_APP_GMAPS_KEY%?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '600px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(MapComponent);

export default MapComponentC;
