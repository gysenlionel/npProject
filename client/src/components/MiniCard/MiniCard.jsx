import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delItem } from '../../redux/action/index'

import { Container, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {},
  img: {
    width: 205,
    height: 115,
    maxWidth: 205,
    maxHeight: 115,
  },
  infoContainer: {},
  name: {
    padding: 0,
    margin: 0,
    color: '#DF4F4F',
  },
  info: {
    fontSize: ' 0.8rem',
  },
  total: {
    fontWeight: 'bold',
  },
}))

const MiniCard = ({ data, qtyMin, qtyMax }) => {
  const classes = useStyles()

  const totalPrice = (qtyMin, qtyMax, priceMin, PriceMax) => {
    let qtymin = parseFloat(qtyMin)
    let qtymax = parseFloat(qtyMax)
    let pricemin = parseFloat(priceMin)
    let pricemax = parseFloat(PriceMax)

    let result = qtymin * pricemin + qtymax * pricemax

    return result
  }

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <img
                  src={data.images[0].url}
                  alt={data.name}
                  className={classes.img}
                />
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <div className={classes.infoContainer}>
                  <h4 className={classes.name}>{data.name}</h4>
                  <p
                    className={classes.info}
                  >{`${data.dates.start.localDate} à ${data.dates.start.localTime}`}</p>
                  <p className={classes.info}>
                    {data._embedded.venues[0].name}
                  </p>
                </div>
              </Grid>

              <Grid item lg={4} md={4} sm={4} xs={12}>
                <p className={classes.info}>
                  {qtyMin !== '0'
                    ? `${qtyMin} x ${data.priceRanges[0].min}€ `
                    : null}
                </p>
                <p className={classes.info}>
                  {qtyMax !== '0'
                    ? `${qtyMax} x ${data.priceRanges[0].max}€ `
                    : null}
                </p>

                <h4 className={classes.total}>
                  {totalPrice(
                    qtyMin,
                    qtyMax,
                    data.priceRanges[0].min,
                    data.priceRanges[0].max
                  )}{' '}
                  €
                </h4>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default MiniCard
