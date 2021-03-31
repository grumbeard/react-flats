import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {};
  // }

  renderList = () => {
    return this.props.flats.map(
      flat => <Flat name={flat.name} src={flat.imageUrl} lat={flat.lat} lng={flat.lng} price={flat.price} currency={flat.priceCurrency} key={flat.id} selectFlatFunction={this.props.selectFlatFunction} />
    );
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
