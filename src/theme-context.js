import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core';
import React from 'react';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#02c76e',
    },
    error: red,
  },
});
export const ThemeContext = React.createContext(theme);
export function CurrentTheme({ children }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
