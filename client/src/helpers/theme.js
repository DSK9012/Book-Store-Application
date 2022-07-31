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
    action: {
      focus: 'silver',
      hover: '#dd1a1a',
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
      styleOverrides: {
        body2: {
          fontWeight: 'inherit',
          fontFamily: 'inherit',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: 'silver',
          '& .MuiSvgIcon-root': {
            fontSize: '24px',
          },
          '&.Mui-checked': {
            color: '#00c1d4',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#00c1d4',
          color: 'rgba(255,255,255,.9)',
          textTransform: 'none',
          margin: '0 8px',
          padding: '4px 12px',
          minWidth: '100px',
          '&:hover': {
            backgroundColor: '#00c1d4',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          fontWeight: 500,
          color: '#70838f',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          color: '#70838f',
          marginTop: '-4px',
        },
        label: {
          paddingTop: '4px',
          fontSize: '18px',
          color: '#70838f',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#70838f',
          letterSpacing: '0.16px',
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: 'Roboto',
          '&.Mui-focused': {
            color: '#70838f',
          },
          '&$shrink, &$shrink $asterisk': {
            color: '#70838f',
            letterSpacing: '0.4px',
            lineHeight: 1.33,
            fontWeight: 500,
            fontFamily: 'Roboto',
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
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
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
          fontSize: '16px',
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
