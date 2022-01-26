import React, { useContext } from 'react'

import { Container, makeStyles } from '@material-ui/core'

import { AuthContext } from '../../context/auth'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(8),
    },
  },
}))

const Home = () => {
  const classes = useStyles()

  const { user } = useContext(AuthContext)

  return (
    <Container className={classes.container}>
      <div>hello</div>
    </Container>
  )
}

export default Home
