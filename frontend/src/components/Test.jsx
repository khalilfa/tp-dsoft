import React from 'react';
import GoogleMapReact from 'google-map-react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: undefined,
    };
    this.handleApiLoaded = this.handleApiLoaded.bind(this);
  }

  handleApiLoaded({ map, maps }) {
    maps.event.addListener(map, 'click', (event) => {
      this.setState({ location: event.latLng });
    });
  }

  render() {
    return (
      <div>
        <h1>Mapa</h1>
        <div style={{ height: '500px', width: '500px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: '%REACT_APP_GMAPS_KEY%' }}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={this.handleApiLoaded}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          />
        </div>
      </div>
    );
  }
}

Test.defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};
