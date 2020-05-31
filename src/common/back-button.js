import React from 'react';
import { useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const BackButton = () => {
  const history = useHistory();

  return (
    <Fab
      variant='extended'
      color='secondary'
      onClick={history.goBack}
      style={{
        position: 'fixed',
        bottom: '3%',
        left: '3%',
        height: '40px',
        fontSize: '13px'
      }}>
      <ArrowBackIcon style={{ marginRight: '5px' }} fontSize='small' />
      Back
    </Fab>
  );
}

export default BackButton;