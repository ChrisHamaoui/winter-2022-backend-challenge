import React from 'react';

// Custom JSX components imports
import Header from './Header';
import Footer from './Footer';

// material-ui imports
import { createTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004c3f',
      secondary: '#9e9e9e',
    },
    background: {
      default: '#fbf7ed',
    },
    text: {
      primary: '#004c3f',
      secondary: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
