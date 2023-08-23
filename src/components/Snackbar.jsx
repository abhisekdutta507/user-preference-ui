import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const DefaultSnackProps = {
  open: false,
  onClose: () => {},
  message: '',
  severity: 'info' || 'warning' || 'error' || 'success'
};

export const Snackbar = ({
  open = false,
  onClose: handleClose,
  message = '',
  severity = ''
}) => {
  return (
    <MuiSnackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={2000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </MuiAlert>
    </MuiSnackbar>
  )
};

export default Snackbar;
