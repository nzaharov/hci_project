import React from 'react';
import LeafletMap from './map';
import Typography from '@material-ui/core/Typography'
import './trip.css';

const Trip = (props) => {
  const trip = props.trip;

  return (
    <>
      <LeafletMap markers={trip.stops} />
      <div className='content'>
        <div className='content-header'>
          <Typography variant='h4'>{trip.name}</Typography>
          <Typography variant='subtitle1'>{trip.author}</Typography>
        </div>
        <Typography variant='body1'>{trip.description}</Typography>
      </div>
    </>
  );
}

export default Trip;