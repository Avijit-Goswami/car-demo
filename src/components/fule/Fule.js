import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import { 
  TextField,
  Dialog,
  IconButton,
  Typography,
  Grid
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
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
  img: {
      width: "50px",
      height: "50px"
  }

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



const Fule = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [cities, setCities] = useState([])

  useEffect(() => {
      axios.get('http://35.238.104.71:7100/api/v1/cities')
      .then((res) => {
          setCities(res.data.data)
      })
      .catch((err) => {
          console.log(err)
      })
  }, [])

  const classes = useStyles();
  
  return (
    <div>
        <TextField id="standard-basic" fullWidth label="Select Fule Type" onClick={handleClickOpen}/>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
             Select Fule Type
          </DialogTitle>
        <DialogContent dividers>
          <div className={classes.root}>
            <Grid container spacing={3} justify="center" alignContent="center">
                {
                  cities.map((city) => (
                      <Grid item xs={6} key={city.name}>
                          <img alt='city' src= {city.icon} className={classes.img}></img>
                        <Typography variant="subtitle2" gutterBottom>
                            {city.name}
                        </Typography>
                    </Grid>
                  ))  
                }
              
            </Grid>
          </div>
        </DialogContent>
          
        </Dialog> 
        
    </div>
  );
}

export default Fule