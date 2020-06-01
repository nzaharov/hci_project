import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  thumbnail: {
    width: '100%',
    height: '180px',
    objectFit: 'cover'
  },
  picture: {
    maxHeight: '90vh',
    maxWidth: '90vw'
  }
}));

const ModalPicture = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.modal}>
      <img
        src={props.source}
        alt='pic'
        className={classes.picture}
      />
    </div>
  );

  return (
    <div>
      <img
        src={props.source}
        alt='thumbnail'
        onClick={handleOpen}
        className={classes.thumbnail}
      />
      <Modal open={open} onClose={handleClose} >
        {body}
      </Modal>
    </div>
  );
}

export default ModalPicture;
