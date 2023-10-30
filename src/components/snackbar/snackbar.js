import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

const CustomSnackbar = ({ open, message, handleClose, position = { vertical: 'bottom', horizontal: 'center' }, color }) => {

  return (
    <Snackbar
      anchorOrigin={{ vertical: position.vertical, horizontal: position.horizontal }}
      open={open}
      onClose={handleClose}
      message={message}
      color='danger'
      key={position.vertical + position.horizontal}
      ContentProps={{
        style: { backgroundColor: color },
      }}
    />
  );
};

export default CustomSnackbar;
