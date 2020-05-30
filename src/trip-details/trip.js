import React from 'react';
import LeafletMap from './map';

const Trip = () => {
  const position = [42, 23];

  return (
    <LeafletMap position={position} />
  );
}

export default Trip;