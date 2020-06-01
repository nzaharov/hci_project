import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, TextField, Button } from '@material-ui/core';
import { ThemeContext } from '../theme-context';
import trips from '../main-page/trips';

const AddStops = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pictures, setPictures] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const theme = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    footer: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
    },
    input: {
      display: 'none',
      padding: 12,
    },

    error: {
      textAlign: "center",
      color: 'red',
      fontSize: '1.3rem'
    }
  }));

  const classes = useStyles();

  const submit = event => {
    event.preventDefault();
    trips.push({ name, author: 'Admin Adminov', stops: [], description, isLiked: false, likes: 0 });
    history.push('/');
  }

  const upload = e => {
    setPictures(Array.from(e.target.files));
  }
  function encodeImageFileAsURL(element) {
    var file = pictures.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log('RESULT', reader.result)
    }
    reader.readAsDataURL(file);
  }

  return (
    <>
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={submit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Title"
            value={name}
            onChange={event => setName(event.target.value)}
            name="username" />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={description}
            name="description"
            label="Description"
            multiline
            rows="6"
            id="password"
            onChange={event => setDescription(event.target.value)}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={upload}
            />
            <input type="submit" id="upload-button" hidden />

            <label htmlFor="contained-button-file">
              <Button variant="outlined" color="primary" component="span">
                Upload Images
            </Button>
            </label>
            <Button variant="outlined" color="primary" component="span">
              Pin on Map
            </Button>
          </div>

          <Button variant="outlined" color="primary" component="span">
            Add Another Stop
            </Button>
        </form>

        {errorMessage ? <p className={classes.error}>{errorMessage}</p> : ''}

      </div>
    </>
  );
}

export default AddStops;