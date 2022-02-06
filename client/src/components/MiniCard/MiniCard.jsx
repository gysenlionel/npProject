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
  },
}))

const MiniCard = ({ data, qtyMin, qtyMax }) => {
  const classes = useStyles()

  // const state = useSelector((state) => state.handleCart)
  // const dispatch = useDispatch()

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
                  <p>{`${data.dates.start.localDate} à ${data.dates.start.localTime}`}</p>
                  <p>{data._embedded.venues[0].name}</p>
                </div>
              </Grid>

              <Grid item lg={4} md={4} sm={4} xs={12}>
                {qtyMin}
                {qtyMax}
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default MiniCard
