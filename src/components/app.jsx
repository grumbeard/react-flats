import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(flats);
    return (
      <div>
        <FlatList flats={flats} />
      </div>
    );
  }
}

export default App;
