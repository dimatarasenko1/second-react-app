import React, { Component } from 'react';

class Flat extends Component {
  url = () => {
    const attrs = this.props;
    const { imageUrl } = attrs.data;
    return imageUrl;
  }

  handleClick = (event) => {
    event.preventDefault();
    const { data, changeActive } = this.props;
    const { name } = data;
    changeActive(name);
  }

  render() {
    const { active } = this.props;
    let classes = "card";
    if (active) {
      classes += " card active";
    }
    const cardStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.url()})`
    };
    const attrs = this.props;
    const { name, price, priceCurrency } = attrs.data;
    return (
      <div className={classes} style={cardStyle}>
        <div className="card-category">{`${price} ${priceCurrency}`}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Flat;
