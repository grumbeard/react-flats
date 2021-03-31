import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div className="marker">{text}</div>;

class SimpleMap extends Component {

  static defaultProps = {
    center: {
      lat: 1.3521,
      lng: 103.8198
    },
    zoom: 11
  };

  constructor(props) {
    super(props);

    this.state = {
      apiKey: 'AIzaSyA2oO-3h7GVV1x21qaXRzxxPEBtfQXIw7A',
      markerLat: 1.3521,
      markerLng: 103.8198,
      center: [1.3521, 103.8198]
    };
  }

  shouldComponentUpdate() {
    return (this.state.markerLat !== this.props.selectedFlatLat) && (this.state.markerLng !== this.props.selectedFlatLng);
  }

  componentWillUpdate() {
    console.log('map will update');
    console.log(this.props);
    this.setState({
      markerLat: this.props.selectedFlatLat,
      markerLng: this.props.selectedFlatLng,
    });
  }

  componentDidUpdate() {
    console.log('map updated');
    console.log(this.props);
    // const coords = [];
    // coords.push(this.props.selectedFlatLat, this.props.selectedFlatLng);
    // console.log(coords);
    // this.setState({
    //   center: coords
    // });
    // console.log(this.state);
  }

  render() {
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
          center={this.state.center}
        >
          <Marker
            lat={this.state.markerLat}
            lng={this.state.markerLng}
            text="!"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
