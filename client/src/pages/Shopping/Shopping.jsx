import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Container, Grid, makeStyles } from '@material-ui/core'

import MiniCard from '../../components/MiniCard/MiniCard'
import BlackButton from '../../components/Button/BlackButton'
import RedButton from '../../components/Button/RedButton'
import { totalPrice } from '../../utils/totalPrice'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(11),
    },
  },
  title: {
    color: '#DF4F4F',
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  paydContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  total: {
    display: 'flex',
    alignItems: 'center',
  },
  btn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTotal: {
    marginRight: theme.spacing(1),
    float: 'left',
    textAlign: 'center',
    fontSize: '1rem',
    borderRadius: '4px',
    backgroundColor: '#000000',
    width: '70px',
    color: '#fff',
    padding: '1px',
  },
  price: {
    fontSize: '1.2rem',
    color: '#000000',
    fontWeight: 'bold',
  },
  noConcert: {
    width: '100%',
    textAlign: 'center',
  },
}))

const Shopping = () => {
  const classes = useStyles()

  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()

  // calcul tout le panier
  let totalShopping = () => {
    let totalArray = []
    totalArray &&
      totalArray.push(
        state.map((data) => {
          let chiffre = totalPrice(
            data.qtyMin,
            data.qtyMax,
            data.product.priceRanges[0].min,
            data.product.priceRanges[0].max
          )
          return chiffre
        })
      )
    let newArray = totalArray.reduce((acc, val) => acc.concat(val), [])
    let result = newArray.reduce((a, b) => a + b, 0)
    return result + '€'
  }

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <h3 className={classes.title}>Your shopping cart</h3>
            <Grid container spacing={2}>
              {state.length !== 0 ? (
                state.map((data) => (
                  <Grid item md={12} sm={12} xs={12} key={data.product.id}>
                    <MiniCard
                      data={data.product}
                      qtyMin={data.qtyMin}
                      qtyMax={data.qtyMax}
                    />
                  </Grid>
                ))
              ) : (
                <Grid item md={12} sm={12} xs={12}>
                  <h2 className={classes.noConcert}>No concert planned</h2>
                </Grid>
              )}
              {state.length !== 0 && (
                <>
                  <div className={classes.paydContainer}>
                    <div className={classes.total}>
                      <h3 className={classes.titleTotal}>Total</h3>
                      <p className={classes.price}>
                        <p>{totalShopping()}</p>
                      </p>
                    </div>
                  </div>
                  <div className={classes.btn}>
                    <RedButton>pay now</RedButton>
                  </div>
                </>
              )}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default Shopping
