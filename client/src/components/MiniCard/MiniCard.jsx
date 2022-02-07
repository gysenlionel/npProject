import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delCart } from '../../redux/action/index'

import { totalPrice } from '../../utils/totalPrice'

import { Container, Grid, makeStyles } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'

const useStyles = makeStyles((theme) => ({
  container: {
    border: '1px solid #000000',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    borderRadius: '4px',
  },
  img: {
    width: 205,
    height: 115,
    maxWidth: 205,
    maxHeight: 115,
  },
  infoContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    padding: 0,
    margin: 0,
    color: '#DF4F4F',
  },
  info: {
    fontSize: ' 0.8rem',
    margin: '10px 0 3px 0 ',
  },
  total: {
    fontWeight: 'bold',
    marginTop: '10px',
  },
  priceContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoPrice: {
    fontSize: ' 0.8rem',
    margin: '2px 0 0 0 ',
  },
  delete: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconDelete: {
    '&:hover': {
      color: '#DF4F4F',
    },
  },
  imgContainer: {
    textAlign: 'center',
  },
}))

const MiniCard = ({ data, qtyMin, qtyMax }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleClose = (item) => {
    dispatch(delCart(item))
  }

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Grid container>
              <Grid
                item
                lg={3}
                md={3}
                sm={6}
                xs={12}
                className={classes.imgContainer}
              >
                <img
                  src={data.images[0].url}
                  alt={data.name}
                  className={classes.img}
                />
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={12}>
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

              <Grid item lg={3} md={3} sm={6} xs={12}>
                <div className={classes.priceContainer}>
                  <div>
                    <p className={classes.infoPrice}>
                      {qtyMin !== '0'
                        ? `${qtyMin} x ${data.priceRanges[0].min}€ `
                        : null}
                    </p>
                  </div>
                  <div>
                    <p className={classes.infoPrice}>
                      {qtyMax !== '0'
                        ? `${qtyMax} x ${data.priceRanges[0].max}€ `
                        : null}
                    </p>
                  </div>
                  <div>
                    <h4 className={classes.total}>
                      {totalPrice(
                        qtyMin,
                        qtyMax,
                        data.priceRanges[0].min,
                        data.priceRanges[0].max
                      )}
                      €{' '}
                    </h4>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                sm={6}
                xs={12}
                className={classes.delete}
              >
                <DeleteIcon
                  className={classes.iconDelete}
                  onClick={() => handleClose(data)}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default MiniCard
