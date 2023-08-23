import { useContext, useEffect, useMemo, useState } from 'react';
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { Box, Card, InputLabel, MenuItem, FormControl, Select, Button, Typography } from '@mui/material';
import { Preference } from '../constants/theme';
import { APIStatus } from '../constants/api';
import * as usersService from '../services/users';
import Loader from '../components/Loader';
import Snackbar, { DefaultSnackProps } from '../components/Snackbar';
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

function Dashbaord() {
  const [snack, modifySnack] = useState({ ...DefaultSnackProps });
  const [updateApi, setUpdateApi] = useState(APIStatus().default);
  const { preference, toggleTheme } = useContext(Context);
  const user = useLoaderData();
  const navigate = useNavigate();
  const { _id, username } = user;

  const handleSnackClose = () => {
    modifySnack({ ...DefaultSnackProps });
  };

  const preferences = useMemo(() => {
    return Object.entries(Preference);
  }, []);

  const handleChange = (event) => {
    toggleTheme(event.target.value);
  };

  const handleClick = async () => {
    setUpdateApi(APIStatus().loading);
    const response = await usersService.updateById(_id, { preference });
    setUpdateApi(APIStatus().completed);
    modifySnack({
      ...DefaultSnackProps,
      open: true,
      severity: response.error ? 'error' : 'success',
      message: response.error ? response.error.message.text : 'Theme is saved!',
      onClose: handleSnackClose,
    });
  };

  const handleLogout = () => {
    sessionStorage.removeItem('_id');
    navigate('/login');
  };

  useEffect(() => {
    toggleTheme(user.preference);
  }, []);

  return (
    <Box className="dashboard">
      <header className='dashboard-header'>
        <Card className='dashboard-card-header'>
          <Typography variant='h6'>Welcome!</Typography>
          <Button onClick={handleLogout}>Logout</Button>
        </Card>
      </header>

      {
        updateApi.isLoading && <Loader />
      }

      <Snackbar {...snack} />

      <Box className='dashboard-content'>
        <Card className='login-card'>
          <Box className='card-row card-row-input'>
            <Box><Typography>Hello <b>{username}</b></Typography></Box>
            <Box className=''>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="theme-dropdown">Theme</InputLabel>
                <Select
                  id='theme-dropdown'
                  value={preference}
                  label='Theme'
                  onChange={handleChange}
                >
                  {
                    preferences.map(([key, value]) => <MenuItem key={key} value={value}>{value}</MenuItem>)
                  }
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box className='form-row form-row-action'>
            <Button onClick={handleClick}>Save Changes</Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default Dashbaord;
