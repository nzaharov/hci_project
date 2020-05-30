import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Trip from './trip-card'
import trips from './trips';
import { ThemeContext } from '../theme-context';

const TripList=() => {
  const theme = useContext(ThemeContext);
  const useStyles = makeStyles(() => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '90%'
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      {trips.map(trip => <Trip trip={trip} key={trip.name}></Trip>)}
    </div>
  );
}

export default TripList;



