import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import { useState } from 'react';


export default function Tosat({open}) {

  
  
  const action = (
    <React.Fragment>
    
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
      
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      
      <Snackbar
      
        open={open}
        autoHideDuration={6000}

        message="Note archived"
        action={action}
      >
        <Alert
  
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>

        </Snackbar>
    
    </div>
  );
}