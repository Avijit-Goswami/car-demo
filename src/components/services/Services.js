import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    color: 'secondary',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [cards, setcards] = useState([])

  useEffect(() => {
      axios.get('http://35.238.104.71:7100/api/v1/categories')
      .then((res) => {
          setcards(res.data.data)
      })
      .catch((err) => {
          console.log(err)
      })
  }, [])

  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen}>
            View More
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} color='secondary'>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Package Details
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List >
            {
              cards.map((card) => (
                <ListItem button key={card.id}>
                    <ListItemText primary={card.name} secondary="Titania" />
                </ListItem>
              ))  
            }
        </List>
      </Dialog>
    </div>
  );
}