import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#CFEAF8',
      paper: '#FFFFFF',
    },
    primary: {
      main: '#EA52D2',
    },
    secondary: {
      main: '#00F0FF',
    },
    text: {
      primary: '#000000',
      secondary: '#9C9C9C',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: {
      fontSize: 'clamp(24px, 5vw, 32px)',
      fontWeight: 600,
    },
    h2: {
      fontSize: 'clamp(20px, 4vw, 28px)',
      fontWeight: 600,
    },
    h3: {
      fontSize: 'clamp(18px, 3vw, 24px)',
      fontWeight: 500,
    },
    body1: {
      fontSize: 'clamp(14px, 2vw, 16px)',
    },
    body2: {
      fontSize: 'clamp(12px, 1.5vw, 14px)',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: '#CFEAF8',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid #00F0FF',
          borderRadius: '16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #00F0FF',
          borderRadius: '12px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #C9D2D9',
        },
      },
    },
  },
});

