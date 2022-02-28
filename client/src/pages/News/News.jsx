import React, { useEffect, useState } from 'react'

import { Container, Grid, makeStyles } from '@material-ui/core'

import StripeContainer from '../../components/Payement/StripeContainer'

const useStyles = makeStyles((theme) => ({
  new__container: {
    marginTop: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(11),
    },
  },
}))

const News = () => {
  const classes = useStyles()

  return (
    <div className={classes.new__container}>
      <div>work in progress</div>
      {/* <StripeContainer /> */}
    </div>
  )
}

export default News
