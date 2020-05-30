import React, {useContext} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import Login from './login/index';
import { ThemeContext } from './theme-context'

function App() {
  const theme = useContext(ThemeContext);
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Route path='/' component={Login}/>
      <Route path='/home' component={Login} />
    </ThemeProvider>
    </BrowserRouter>
    
  )
}

export default App;
