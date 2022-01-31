import React, { useContext } from 'react'

import { Container, Grid, makeStyles } from '@material-ui/core'

import { AuthContext } from '../../context/auth'

import Jumbo from '../../components/Jumbo/Jumbo'
import Main from '../../components/Main/Main'

const useStyles = makeStyles((theme) => ({
  container: {
    // paddingTop: theme.spacing(9),
    // [theme.breakpoints.up('sm')]: {
    //   paddingTop: theme.spacing(13),
    // },
  },
}))

const Home = () => {
  const classes = useStyles()

  const { user } = useContext(AuthContext)

  return (
    <Grid container className={classes.container}>
      <Jumbo />
      <Main />
    </Grid>
  )
}

export default Home
