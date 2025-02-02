// SnackBarUi.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Slide } from '@mui/material';
import { RootState } from '../../../redux-store/store';

const SlideTransition = (props: any) => {
  return <Slide {...props} direction="left" />;
};

const SnackBarUi: React.FC = () => {
  const { isOpen, message, severity } = useSelector((state: RootState) => state.snackbar);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    console.log(event);
    
    // dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isOpen}
      autoHideDuration={1500} // Adjust as needed
      onClose={handleClose}
      TransitionComponent={SlideTransition}
    >
      <Alert onClose={handleClose} variant="filled" severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarUi;
