import buttonStyles from './buttonStyles';
import { createTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import tableStyles from './tableStyles';

const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#FF751D',
      light: '#FFDAC0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F5F6FB',
      light: '#F5F6FB',
      dark: '#F5F6FB',
      contrastText: '#52555F',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#52555F',
      secondary: '#52555F',
      disabled: 'rgba(82, 85, 95, 0.7)',
      hint: '#C7CCDC',
    },
    error: {
      main: '#E7192E',
      light: '#EB5757',
    },
    success: {
      main: '#407946',
    },
  },
  typography: {
    fontSize: 12,
    fontWeightLight: 400,
    button: {
      fontWeight: 700,
      fontSize: 12,
      lineHeight: 1.17,
      letterSpacing: '0.02em',
      borderRadius: 16,
    },
    htmlFontSize: 12,
    body1: {
      fontSize: '1rem',
      lineHeight: 1.17,
      letterSpacing: '0.04em',
    },
    h2: {
      fontSize: 14,
      lineHeight: 1.14,
      letterSpacing: '0.02em',
      fontWeight: 700,
      color: '#000000',
      align: 'center',
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      desktop: 1280,
    },
  },
  components: {
    MuiButton: buttonStyles,
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: '2px solid #F5F6FB',
          borderRadius: '0',
          height: '44px',
          borderRight: 'none',
          '&.MuiOutlinedInput-input': {
            border: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderWidth: 0,
          },
        },
      },
    },
    ...tableStyles,
  },
};

const theme = createTheme(themeOptions);

export default theme;
