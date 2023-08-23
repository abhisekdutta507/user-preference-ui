export const MODE = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const DarkDefault = {
  background: {
    default: '#201a31',
    paper: '#201a31'
  },
  error: {
    main: '#fd3426'
  },
  primary: {
    main: '#0df5e3',
    dark: '#41a7a2',
    light: '#0df5e3'
  },
  secondary: {
    main: '#41a7a2'
  },
  success: {
    main: '#5ee547'
  }
};

export const Preference = {
  SUNNY: 'Sunny',
  MOONLIGHT: 'Moonlight'
};

export const Themes = new Map([
  [Preference.SUNNY, { palette: { mode: MODE.LIGHT }}],
  [Preference.MOONLIGHT, { palette: { mode: MODE.DARK }}],
]);
