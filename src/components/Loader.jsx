import { createPortal } from 'react-dom';
import { Box, CircularProgress} from '@mui/material';
import './Loader.scss';

export const Loader = () => {
  return createPortal(
    <Box className='loader'>
      <CircularProgress color='secondary' />
    </Box>
  , document.getElementById('portal'));
};

export default Loader;
