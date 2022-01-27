import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'

import Modal from '../Modal/Modal'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

import image from '../../assets/img/fiesta.jpg'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(13),
    },
  },
  jumbo: {
    height: 'auto',
    width: '30%',
    padding: '20px',
    [theme.breakpoints.down('md')]: {
      width: '30%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
  },
  image: {
    width: '100%',
    borderRadius: '30px / 20px',
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  divImage: {
    textAlign: 'center',
  },
  experience: {
    color: '#DF4F4F',
    textShadow: '0px 1px 3px grey',
  },
  lowCost: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#86C4BA',
    textShadow: '0px 2px 3px black',
  },
}))
const Jumbo = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <div className={classes.divImage}>
        <img src={image} alt="" className={classes.image} />
      </div>
      <div className={classes.jumbo}>
        <Modal />
        <h4 className={classes.experience}>More experience</h4>
        <p className={classes.lowCost}>
          Low cost tickets for everyone and the whole family{' '}
        </p>
      </div>
      {/* <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> */}
    </Container>
  )
}

export default Jumbo
