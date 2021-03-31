import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import SimpleMap from './simple_map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlatLat: null,
      selectedFlatLng: null
    };
  }

  componentWillUpdate() {
    console.log('app will update');
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log('app updated');
    console.log(this.state);
  }

  selectFlat = (flatCoords) => {
    console.log('flat selected');
    console.log(flatCoords);
    this.setState({
      selectedFlatLat: flatCoords.lat,
      selectedFlatLng: flatCoords.lng
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <FlatList flats={flats} selectFlatFunction={this.selectFlat} />
        <div className="map-container">
          <SimpleMap selectedFlatLat={this.state.selectedFlatLat} selectedFlatLng={this.state.selectedFlatLng} />
        </div>
      </div>
    );
  }
}

export default App;
