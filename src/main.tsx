import React, { useState, useMemo, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider, createTheme, CssBaseline, useMediaQuery } from '@mui/material';

export const ColorModeContext = createContext({ toggleColorMode: () => { console.log("Default context toggle"); } });

function Main() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        console.log("Setting mode from", mode);
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [mode],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#000000' : '#ffffff',
          },
          secondary: {
            main: '#757575',
          },
          background: {
            default: mode === 'light' ? '#fcfcfc' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontFamily: '"Russo One", sans-serif',
            fontWeight: 700,
            fontSize: '3.5rem',
            letterSpacing: '-0.02em',
          },
          h2: {
            fontFamily: '"Russo One", sans-serif',
            fontWeight: 600,
            fontSize: '2.5rem',
            letterSpacing: '-0.01em',
          },
          h3: {
            fontFamily: '"Russo One", sans-serif',
            fontWeight: 600,
            fontSize: '1.75rem',
          },
          body1: {
            fontSize: '1.15rem',
            lineHeight: 1.7,
          },
          button: {
            textTransform: 'none',
            fontWeight: 600,
          },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(18, 18, 18, 0.8)',
                backdropFilter: 'blur(8px)',
                borderBottom: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'}`,
                backgroundImage: 'none',
              },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                borderRight: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'}`,
                backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e1e',
                backgroundImage: 'none',
              },
            },
          },
          MuiListItemButton: {
            styleOverrides: {
              root: {
                borderRadius: '8px',
                margin: '4px 8px',
                transition: 'all 0.2s ease-in-out',
                '&.Mui-selected': {
                  backgroundColor: mode === 'light' ? '#000000' : '#ffffff',
                  color: mode === 'light' ? '#ffffff' : '#000000',
                  '&:hover': {
                    backgroundColor: mode === 'light' ? '#333333' : '#e0e0e0',
                  },
                },
                '&:hover': {
                  backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.04)',
                },
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
