import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Trip from './trip-card'
import trips from './trips';
import { ThemeContext } from '../theme-context';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Drawer from '../common/drawer';
import { useHistory } from 'react-router-dom';

const TripList = () => {
  const theme = useContext(ThemeContext);
  const history = useHistory();

  const useStyles = makeStyles(() => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      marginBottom: '20px'
    },
    cards: {
      display: 'flex',
      width: '90%',
      height: '90%',
      overflowY: 'auto',
      flexDirection: 'column'
    },
    fab: {
      position: 'fixed',
      zIndex: 1010,
      bottom: '3%',
      right: '5%',
    }
  }));
  const classes = useStyles();
  return (
    <>
      <Drawer>
        <div className={classes.paper}>
          <div className={classes.cards}>
            {trips.map(trip => <Trip trip={trip} key={trip.name}></Trip>)}
          </div>
        </div>
        <Fab
          color="secondary"
          aria-label="add"
          className={classes.fab}
          onClick={() => history.push('create-trip')}>
          <AddIcon />
        </Fab>
      </Drawer>
    </>
  );
}

export default TripList;



