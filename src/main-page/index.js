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
      justifyContent: 'center',
      width: '100%'
    },
    cards: {
      display: 'flex',
      width: '90%',
      flexDirection: 'column'
    }
  }));
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <div className={classes.cards}>
        {trips.map(trip => <Trip trip={trip} key={trip.name}></Trip>)}
      </div>
    </div>
  );
}

export default TripList;



