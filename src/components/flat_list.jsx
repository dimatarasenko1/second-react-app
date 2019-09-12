import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {
  render() {
    return (
      <div className="flat-list">
        {this.props.flats.map(flat => <Flat data={flat} key={flat.name} changeActive={this.props.changeActive} active={this.props.activeFlat === flat.name} />)}
      </div>
    );
  }
}

export default FlatList;
