import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline, Toolbar } from '@mui/material';

function App() {
  const [mode, setMode] = useState('light');
  
  // theme colors based on Atom One Light and Dark
  const theme = useMemo(() => {
    const themeOptions = {
      palette: {
        mode,
        ...(mode === 'light' 
          ? {
              // Atom One Light
              primary: {
                main: '#4078f2', // Blue
                light: '#6498ff',
                dark: '#2d5bbf',
              },
              secondary: {
                main: '#a626a4', // Purple
                light: '#d655d4',
                dark: '#75007a',
              },
              error: {
                main: '#e45649', // Red
              },
              warning: {
                main: '#d19a66', // Orange
              },
              success: {
                main: '#50a14f', // Green
              },
              background: {
                default: '#fafafa', // Light background
                paper: '#ffffff',
              },
              text: {
                primary: '#383a42', // Dark gray
                secondary: '#a0a1a7',
              },
            }
          : {
              // Atom One Dark
              primary: {
                main: '#61afef', // Blue
                light: '#8ccfff',
                dark: '#2b90d9',
              },
              secondary: {
                main: '#c678dd', // Purple
                light: '#e2a6ff',
                dark: '#9c4dcc',
              },
              error: {
                main: '#e06c75', // Red
              },
              warning: {
                main: '#d19a66', // Orange
              },
              success: {
                main: '#98c379', // Green
              },
              background: {
                default: '#282c34', // Dark background
                paper: '#353b45',
              },
              text: {
                primary: '#abb2bf', // Light gray text
                secondary: '#5c6370',
              },
            }),
      },
      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      components: {
        MuiContainer: {
          styleOverrides: {
            root: {
              paddingLeft: {
                xs: 2,
                sm: 3,
                md: 4
              },
              paddingRight: {
                xs: 2,
                sm: 3,
                md: 4
              }
            }
          }
        }
      }
    };
    
    return responsiveFontSizes(createTheme(themeOptions));
  }, [mode]);
  
  const toggleColorMode = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App" style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <Header mode={mode} toggleColorMode={toggleColorMode}/>
        <Toolbar />
        <main style={{ 
          flex: 1,
          padding: '20px',
          maxWidth: '100%',
          overflowX: 'hidden'
        }}>
          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experiences">
            <Experiences />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;