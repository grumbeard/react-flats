import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  constructor(props) {
    super(props);

    this.state = {
      apiKey: 'AIzaSyA2oO-3h7GVV1x21qaXRzxxPEBtfQXIw7A'
    };
  }

  render() {
    console.log(process.env.MAP_API_KEY);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: this.state.apiKey,
            language: 'en',
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
            text="!"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
