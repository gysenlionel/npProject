import React, { useContext } from 'react'

import { Container, Grid, makeStyles } from '@material-ui/core'

import { AuthContext } from '../../context/auth'

import Jumbo from '../../components/Jumbo/Jumbo'

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
    </Grid>
  )
}

export default Home
