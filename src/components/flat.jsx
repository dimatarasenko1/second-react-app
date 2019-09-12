import React, { Component } from 'react';

class Flat extends Component {
  url = () => {
    return this.props.data.imageUrl;
  }

  render() {
    const cardStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.url()})`
    };
    const attrs = this.props;
    const { name, imageUrl, price, priceCurrency, lat, lng } = attrs.data;
    return (
      <div className="card" style={cardStyle}>
        <div className="card-category">{`${price} ${priceCurrency}`}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href={`"${this.url()}"`} />
      </div>
    );
  }
}

export default Flat;
