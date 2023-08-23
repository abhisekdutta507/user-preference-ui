### The idea behind theme is

The 2 default available themes are **Sunny** and **Moonlight**.

```js
export const Preference = {
  SUNNY: 'Sunny',
  MOONLIGHT: 'Moonlight'
};

export const Themes = new Map([
  [Preference.SUNNY, { palette: { mode: MODE.LIGHT }}],
  [Preference.MOONLIGHT, { palette: { mode: MODE.DARK }}],
]);
```

### When creating theme we can create our custom themes

Let's create our first custom theme.

```js
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
  [Preference.MOONLIGHT, { palette: { mode: MODE.DARK, ...DarkDefault }}],
]);
```

### Themes can be stored in DB

We can create a get api to return a list of themes with their names & values. In the above eg. `[Preference.MOONLIGHT, { palette: { mode: MODE.DARK, ...DarkDefault }}]` **Preference.MOONLIGHT** is the `name` & **{ palette: { mode: MODE.DARK, ...DarkDefault }}** is the `value`.

In the users document we can only store the **name** as **preference**.
