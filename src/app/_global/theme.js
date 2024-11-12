'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#000', 
      },
      secondary: {
        main: '#F9F8FED9',
      },
      background: {
        default: '#000000',
        paper: '#1c1c1c', 
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif', 
      fontSize: 14
    },
  });
  
  export default theme;
