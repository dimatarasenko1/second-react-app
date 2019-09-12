import React, { Component } from 'react';

import flats from '../../data/flats';
import Flat from './flat';

class FlatList extends Component {
  render() {
    return (
        <div className="flat-list">
          {flats.map(flat => <Flat data={flat} key={flat.name} />)}
        </div>
    );
  }
}

export default FlatList;
