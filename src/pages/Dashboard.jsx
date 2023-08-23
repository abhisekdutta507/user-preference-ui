import { useContext } from 'react';
import { redirect, useLoaderData } from 'react-router-dom';
import { Box, Card, InputLabel, MenuItem, FormControl, Select, Button, Typography } from '@mui/material';
import { MODE, DarkDefault } from '../constants/theme';
import * as usersService from '../services/users';
import { Context } from '../App';
import './Dashboard.scss';

export const dashboardLoader = async ({ params, request }) => {
  const _id = sessionStorage.getItem('_id')
  if (!_id?.length) {
    return redirect('/login');
  }

  const response = await usersService.getById(_id);
  if (response.error) {
    sessionStorage.removeItem('_id');
    sessionStorage.removeItem('username');
    return redirect('/login');
  }

  const { data } = response.data;

  return data;
};

// const initialTheme = 20;

function Dashbaord() {
  const { mode, theme, toggleTheme } = useContext(Context);
  const user = useLoaderData();
  const { _id, username, preference = {} } = user;

  console.log('preference', { _id, username, preference, theme, mode });

  const handleChange = (event) => {
    toggleTheme(event.target.value);
    console.log('value', event.target.value);
  };

  return (
    <Box className="dashboard">
      <header className='dashboard-header'>
        <Card className='dashboard-card-header'>
          <Typography variant='h6'>Header...</Typography>
        </Card>
      </header>

      <Box className='dashboard-content'>
        <Card className='login-card'>
          <Box className='form-row form-row-input'>
            <Typography>Hello {username}, welcome to the dasbboard!</Typography>
          </Box>
          <Box className='form-row form-row-action'>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="theme-dropdown">Theme</InputLabel>
              <Select
                id='theme-dropdown'
                value={mode}
                label='Theme'
                onChange={handleChange}
              >
                <MenuItem value={MODE.LIGHT}>Light</MenuItem>
                <MenuItem value={MODE.DARK}>Dark</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className='form-row form-row-action'>
            <Button>Save Changes</Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default Dashbaord;
