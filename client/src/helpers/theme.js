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
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          boxShadow: 'none',
          '&::before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: '0',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderBottom: '1.3px solid rgba(0, 56, 101, 0.1)',
          padding: '0',
          borderRadius: 'none',
          margin: '0',
          fontSize: '20px',
          fontWeight: 'bold',
          '&.Mui-expanded': {
            minHeight: '48px',
            margin: '0',
          },
        },
        content: {
          margin: '0',
          '&.Mui-expanded': {
            margin: '0',
          },
        },
      },
    },
  },
});

export default theme;
