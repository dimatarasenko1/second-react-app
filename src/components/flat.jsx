import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  url = () => {
    return this.props.data.imageUrl;
  }

  buildClasses = () => {

  }

  handleClick = (event) => {
    event.preventDefault();
    console.log(this.props.data.name);
    this.setState({
      active: true
    });
  }

  render() {
    let classes = "card";
    if (this.state.active) {
      classes += " card active";
    }
    const cardStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.url()})`
    };
    const attrs = this.props;
    const { name, imageUrl, price, priceCurrency, lat, lng } = attrs.data;
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
