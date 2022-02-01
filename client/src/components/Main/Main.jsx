import React, { useEffect, useState } from 'react'

import { Container, Grid, makeStyles } from '@material-ui/core'

import CardComp from '../CardComp/CardComp'
import Spinner from '../Spinner/Spinner'

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    width: '100%',
  },
  titleContainer: {
    height: theme.spacing(10),
    width: '100%',
    marginTop: theme.spacing(10),
    backgroundColor: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#DF4F4F',
  },
  headliners: {
    marginBottom: theme.spacing(10),
  },
  loading: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  test: {
    textAlign: '-webkit-center',
  },
}))
const Main = () => {
  const classes = useStyles()

  let [loading, setLoading] = useState(true)

  let [fetchedData, updateFetchedData] = useState([])
  let { page, _embedded, _links } = fetchedData
  //   fetch
  let api = `
  https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_TICKETS_KEY}&locale=*&countryCode=BE&segmentId=KZFzniwnSyZfZ7v7nJ`
  useEffect(() => {
    ;(async function () {
      let results = await fetch(api)
      let data = await results.json()
      updateFetchedData(data)
      setLoading(false)
    })()
  }, [api])

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>Our headliners</h2>
      </div>

      <div className={classes.headliners}></div>
      <Grid container sx={{ pt: 0 }} className={classes.background}>
        <Grid item xs={12}>
          <Container maxWidth="lg" className={classes.formContainer}>
            <Grid container spacing={2}>
              {/* <Grid item lg={3} md={4} xs={6}>
                <CardComp />
              </Grid> */}
              {loading ? (
                <div className={classes.loading}>
                  <Spinner />
                </div>
              ) : (
                _embedded &&
                _embedded.events.map((e, index) => (
                  <Grid
                    item
                    lg={3}
                    md={4}
                    sm={6}
                    xs={12}
                    key={index}
                    className={classes.test}
                  >
                    <CardComp
                      name={e.name}
                      img={e.images[8].url}
                      date={e.dates.start.localDate}
                      priceMin={e.priceRanges[0].min}
                      venue={e._embedded.venues[0].name}
                      id={e.id}
                    />
                  </Grid>
                ))
              )}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default Main
