import { green, grey, red } from '@material-ui/core/colors';
import { createMuiTheme, Theme } from '@material-ui/core';
import React from 'react';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#81c784',
    },
    secondary: {
      main: '#212121',
    },
    error: red,
  },
});
export const ThemeContext = React.createContext(theme);
export function CurrentTheme({ children }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
