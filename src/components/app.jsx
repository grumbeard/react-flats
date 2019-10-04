import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import SimpleMap from './simple_map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <FlatList flats={flats} />
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
