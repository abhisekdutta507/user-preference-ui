import { useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
// import { useMediaQuery } from '@mui/material';

// others
import { Preference, DarkDefault, Themes } from '../constants/theme';

export const useTheme = (initialPreference = Preference.SUNNY) => {
  const [preference, setPreference] = useState(initialPreference);

  const theme = useMemo(() => {
    const theme = Themes.get(preference);
    return createTheme(theme);
  }, [preference]);

  const toggleTheme = (preference = Preference.SUNNY) => {
    if(Themes.has(preference)) {
      setPreference(preference);
    };
  };

  return [preference, theme, toggleTheme];
};

export default useTheme;
