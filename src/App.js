import React, {useContext} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import Login from './login/index';
import TripDetails from './trip-details';
import { ThemeContext } from './theme-context';
import MainPage from './main-page';
import Drawer from './drawer';
import UpsertTrip from './add-trip';

function App() {
  const theme = useContext(ThemeContext);
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Drawer>
        <Route exact path='/auth/login' component={Login}/>
        <Route exact path='/' component={MainPage} />
      </Drawer>
      <Route exact path='/trip/add' component={UpsertTrip} />
      <Route exact path='/trip' component={TripDetails} />

    </ThemeProvider>
    </BrowserRouter>
    
  )
}

export default App;
