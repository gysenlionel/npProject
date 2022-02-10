import React, { useContext } from 'react'

import { AuthContext } from '../../context/auth'

import { Container, Grid, makeStyles } from '@material-ui/core'

import Modal from '../Modal/Modal'
import Modal2 from '../Modal/Modal2'
import Modal3 from '../Modal/Modal3'

import image from '../../assets/img/test6.jpg'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100% !important',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '110vh',
    display: 'flex',
    position: 'relative',
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

  titleContainer: {
    height: theme.spacing(10),
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.800)',
    // background: 'linear-gradient(to top, rgba(0,0,0,0.800) 0%, #000000 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '0px',
  },
  title: {
    color: '#DF4F4F',
  },
}))
const Jumbo = () => {
  const { user } = useContext(AuthContext)
  const classes = useStyles()
  console.log(user)
  return (
    <div className={classes.container}>
      <div className={classes.jumbo}>
        <h2 className={classes.tickets}>
          <span className={classes.low}>Low cost</span> tickets
        </h2>
        <p className={classes.everyone}>to share with everyone and enjoy!!!</p>
        {!user && <Modal />}
      </div>
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>Our headliners</h2>
      </div>
    </div>
  )
}

export default Jumbo
