import React from 'react';

import Flat from './flat';

const FlatList = (props) => {
  const { flats, changeActive, activeFlat } = props;
  return (
    <div className="flat-list">
      {flats.map((f) => {
        return <Flat data={f} key={f.name} changeActive={changeActive} active={activeFlat === f.name} />;
      })}
    </div>
  );
};

export default FlatList;
