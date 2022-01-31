import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'

import Modal from '../Modal/Modal'

import image from '../../assets/img/test6.jpg'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100% !important',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  jumbo: {
    height: 'auto',
    width: '30%',
    padding: '20px',
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,0.800)',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '30%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
  },
  low: {
    fontSize: '2rem',
  },
  tickets: {
    color: '#fff',
  },
  everyone: {
    fontSize: '1.2rem',

    color: '#fff',
  },
}))
const Jumbo = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.jumbo}>
        <h2 className={classes.tickets}>
          <span className={classes.low}>Low cost</span> tickets
        </h2>
        <p className={classes.everyone}>to share with everyone and enjoy!!!</p>
        <Modal />
      </div>
    </div>
  )
}

export default Jumbo
