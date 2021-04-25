import React, { Fragment, useState, useEffect } from 'react';
import { 
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Typography,
    Container
  } from '@material-ui/core';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import BuildIcon from '@material-ui/icons/Build';
import useStyles from './styles'
import DialogUi from './components/dialog/DialogUi'
import Services from './components/services/Services'
import axios from 'axios'

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Album = () => {
  const classes = useStyles();

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
    <Fragment>
      <CssBaseline />
      <AppBar position="relative" color='secondary'>
        <Toolbar>
          <DriveEtaIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Car Service
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Car Service
            </Typography>
            <Typography variant="h5" align="center" color='textPrimary' paragraph>
            Experience The Best Car Services In your city. 
            Experience The Best Car Services In your city. 
            Experience The Best Car Services In your city.
            Experience The Best Car Services In your city.
            Experience The Best Car Services In your city. 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <DialogUi/>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <AppBar position="relative" color='secondary' className={classes.appBottom} >
          <Toolbar>
            <BuildIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Our Services
            </Typography>
          </Toolbar>
          </AppBar>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Services/>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </Fragment>
  );
}

export default Album