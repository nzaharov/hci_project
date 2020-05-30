import React, {useContext} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import Login from './login/index';
import TripDetails from './trip-details';
import { ThemeContext } from './theme-context';
import MainPage from './main-page';

function App() {
  const theme = useContext(ThemeContext);
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/' component={MainPage} />
    </ThemeProvider>
    </BrowserRouter>
    
  )
}

export default App;
