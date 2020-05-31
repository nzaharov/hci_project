import React from 'react';
import LeafletMap from './map';
import Typography from '@material-ui/core/Typography'
import './trip.css';
import Avatar from '@material-ui/core/Avatar';

const Trip = (props) => {
  const trip = props.trip;

  return (
    <>
      <LeafletMap markers={trip.stops} />
      <div className='content'>
        <div className='content-header'>
          <Typography variant='h4'>{trip.name}</Typography>
          <span style={{ display: 'flex' }}>
            <Avatar style={{ height: '18px', width: '18px', marginRight: '6px', marginTop: '4px' }} />
            <Typography variant='subtitle1'>{trip.author}</Typography>
          </span>
        </div>
        <Typography variant='body1'>{trip.description}</Typography>
      </div>
    </>
  );
}

export default Trip;