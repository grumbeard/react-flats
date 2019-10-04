import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const src = `https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg`;
    const backgroundStyle = {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(' + this.props.src + ')'
    };

    return (
      <div className="card" style={backgroundStyle}>
        <div className="card-category">{this.props.price} {this.props.currency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
