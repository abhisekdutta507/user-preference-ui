import { createContext } from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from './hooks/useTheme';
import { RoutesWrapper } from './routes';
import { Preference, DarkDefault } from './constants/theme';
import './App.scss';

export const Context = createContext({
  preference: Preference.SUNNY,
  theme: {},
  toggleTheme: () => {},
});

export const appLoader = () => {
  
};

export const App = (props = {}) => {
  const { children, ...rest } = props;
  const [preference, theme, toggleTheme] = useTheme(Preference.SUNNY);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Context.Provider value={{
        preference,
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
