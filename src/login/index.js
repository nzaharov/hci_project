import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, ThemeProvider, CssBaseline, TextField, Button, Typography } from '@material-ui/core';
import { ThemeContext } from '../theme-context';

const Login = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const theme = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '90%'
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

    error: {
      textAlign: "center",
      color: 'red',
      fontSize: '1.3rem'
    }
  }));

  const classes = useStyles();

  const submit = event => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
      history.push('/main');
    } else {
      setErrorMessage('Wrong username or password');
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="login">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} onSubmit={submit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              value={username}
              onChange={event => setUsername(event.target.value)}
              name="username"
              autoComplete="username"
              autoFocus />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={event => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              color='primary'
            >
              Login
          </Button>
          </form>

          {errorMessage ? <p className={classes.error}>{errorMessage}</p> : ''}

        </div>
      </div>
    </ThemeProvider>
  );
}

export default Login;