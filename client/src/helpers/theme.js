import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      paper: '#fafafa',
    },
  },
  spacing: 8,
});

export default theme;
