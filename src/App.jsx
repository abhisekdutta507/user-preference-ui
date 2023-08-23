import { createContext } from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from './hooks/useTheme';
import { RoutesWrapper } from './routes';
import { MODE, DarkDefault } from './constants/theme';
import './App.scss';

export const Context = createContext({
  mode: MODE.LIGHT,
  theme: {},
  toggleTheme: () => {},
});

export const appLoader = () => {
  
};

export const App = (props = {}) => {
  const { children, ...rest } = props;
  const [mode, theme, toggleTheme] = useTheme(MODE.LIGHT);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Context.Provider value={{
        mode,
        theme,
        toggleTheme
      }}>
        <div className='app' {...rest}>
          <RoutesWrapper />
        </div>
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;
