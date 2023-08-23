import { useState, useEffect, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

// others
import { MODE, DarkDefault } from '../constants/theme';

export const useTheme = (initialMode = MODE.LIGHT) => {
  // const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${MODE.LIGHT})`);
  const [mode, setMode] = useState(initialMode);


  /*
  useEffect(() => {
    // disable auto detect system mode
    setMode(prefersDarkMode ? MODE.DARK : MODE.LIGHT);
  }, [prefersDarkMode]);
  */

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      // ...DarkDefault
    }
  // eslint-disable-next-line
  }), [JSON.stringify({ mode })]);

  const toggleTheme = () => setMode(mode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT);

  return [mode, theme, toggleTheme];
};

export default useTheme;
