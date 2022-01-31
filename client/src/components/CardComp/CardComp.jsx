import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import testImage from '../../assets/img/test.jpg'

import { makeStyles } from '@material-ui/core'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: '-1px 1px 1px rgba(0,0,0, 0.3), 1px -1px 1px rgba(0,0,0, 0.3)',
    borderRadius: '6px',
    maxWidth: 345,
  },
  content: {
    color: '#6E6E6E',
  },
  more: {
    color: '#DF4F4F',

    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: '#000000',
    },
  },
  containerContent: {
    position: 'relative',
  },
  cardActions: {
    position: 'absolute',
    top: '370px',
    left: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      top: '240px',
    },
  },
  allCard: {
    maxWidth: 345,
    height: 580,
    // [theme.breakpoints.down('md')]: {
    //   height: 440,
    // },
    [theme.breakpoints.up('sm')]: {
      height: 450,
    },
  },
}))

export default function ImgMediaCard({ name, img, date, priceMin, venue }) {
  const classes = useStyles()
  return (
    <div className={classes.card}>
      <Card className={classes.allCard}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={img}
        />
        <div className={classes.containerContent}>
          <CardContent>
            <h3>{name}</h3>
            <div className={classes.content}>
              <p>date: {date}</p>
              <p>price: {priceMin}€</p>
              <p>venue: {venue}</p>
            </div>
          </CardContent>
          <div className={classes.cardActions}>
            <div className={classes.more}>
              <p>Learn more </p>
              <KeyboardArrowRightIcon />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
