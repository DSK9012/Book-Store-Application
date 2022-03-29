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
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        current: {
          color: 'black',
          fontFamily: 'AvenirNext-DemiBold',
        },
      },
    },
    MuiPickersCalendar: {
      styleOverrides: {
        transitionContainer: {
          marginBottom: '12px',
        },
      },
    },
    MuiTypography: {
      body2: {
        fontWeight: 'inherit',
        fontFamily: 'inherit',
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#70838f',
          letterSpacing: '0.16px',
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: 'AvenirNext-Medium',
          '&$shrink, &$shrink $asterisk': {
            color: '#70838f',
            letterSpacing: '0.4px',
            lineHeight: 1.33,
            fontWeight: 500,
            fontFamily: 'AvenirNext-Medium',
          },
          '& $asterisk': {
            color: '#00c1d4',
          },
          '&$error, &$error $asterisk': {
            color: '#b00020',
            fontWeight: 500,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: '#b00020',
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.3px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #00c1d4',
          },
          '&.MuiOutlinedInput-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#00c1d4',
          },
          '& .MuiInputBase-input.Mui-disabled': {
            color: '#70838f',
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            border: 'solid 1px rgba(0, 56, 101, 0.1)',
          },
          '&$error $notchedOutline, &$error:hover $notchedOutline': {
            borderColor: '#e26262',
          },
        },
        notchedOutline: {
          borderColor: 'rgba(0, 56, 101, 0.1)',
        },
        input: {
          background: '#fff',
        },
      },
    },
  },
});

export default theme;
