import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

 function BsSnak(props) {
     let { open , mess , close}  = props 

  const handleClose = () => {
    close(false)
  };

  const buttons = (
    <React.Fragment>

      {/* <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'center',
            })}
      >
        Bottom-Center
      </Button> */}
    
    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
        open={open}
        onClose={handleClose}
        message={mess}
        // key={vertical + horizontal}
      />
    </div>
  );
}

export default BsSnak; 