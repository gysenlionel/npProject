import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Container, Grid, makeStyles } from '@material-ui/core'

import MiniCard from '../../components/MiniCard/MiniCard'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(11),
    },
  },
  title: {
    color: '#DF4F4F',
  },
}))

const Shopping = () => {
  const classes = useStyles()

  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <h3 className={classes.title}>Your shopping cart</h3>
            <Grid container spacing={2}>
              {state.length !== 0 &&
                state.map((data) => (
                  <Grid item md={12} sm={12} xs={12} key={data.product.id}>
                    <MiniCard
                      data={data.product}
                      qtyMin={data.qtyMin}
                      qtyMax={data.qtyMax}
                    />
                  </Grid>
                ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default Shopping
