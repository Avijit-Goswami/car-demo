import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  Button,
  Dialog,
  IconButton,
  Typography,
  Grid,
  TextField
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import City from '../city/City'
import Manufacturer from '../manufacturer/Manufacturer'
import Brand from '../brand/Brand'
import Fule from '../fule/Fule'
import { makeStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}))(MuiDialogContent);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});



const DialogUi = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  
  return (
    <div>
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          Register a Service
        </Button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Register a Service
        </DialogTitle>
        <DialogContent dividers>
          <div className={classes.root}>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12}>
                <City/>
              </Grid>
              <Grid item xs={12}>
                <Manufacturer/>
              </Grid>
              <Grid item xs={12}>
                <Brand/>
              </Grid>
              <Grid item xs={12}>
                <Fule/>
              </Grid>
              <Grid item xs={12}>
                <TextField id="standard-basic" fullWidth label="Enter Mobile Number"/>
              </Grid>
              <Grid item xs={12} >
                  <Button variant="contained" color="secondary">
                    Submit
                  </Button>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
          
        </Dialog> 
        
    </div>
  );
}

export default DialogUi