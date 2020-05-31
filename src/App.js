import React, { useContext } from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import Login from './login/index';
import TripDetails from './trip-details';
import { ThemeContext } from './theme-context';
import MainPage from './main-page';
import UpsertTrip from './add-trip';

function App() {
  const theme = useContext(ThemeContext);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <Route exact path='/'>
          <Redirect to='/auth/login' />
        </Route>
        <Route exact path='/auth/login' component={Login} />
        <Route exact path='/main' component={MainPage} />
        <Route exact path='/create-trip' component={UpsertTrip} />
        <Route exact path='/trip' component={TripDetails} />
      </ThemeProvider>
    </BrowserRouter>

  )
}

export default App;
