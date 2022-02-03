import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Container, Grid, makeStyles } from '@material-ui/core'

import Spinner from '../../components/Spinner/Spinner'
import ShoppingCart from '../ShoppingCart/ShoppingCart'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(9),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(13),
    },
  },
  containerImg: {
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    maxWidth: 640,
    maxHeight: 360,
    width: '100%',
    height: '100%',
  },
  infos: {
    fontSize: '1rem',
    marginLeft: theme.spacing(2),
  },
  name: {
    textAlign: 'center',
    color: '#DF4F4F',
  },
  info: {
    // fontWeight: 'bold',
  },
  badge: {
    float: 'left',
    textAlign: 'center',
    fontSize: '0.8rem',
    borderRadius: '4px',
    backgroundColor: '#000000',
    width: '70px',
    color: '#fff',
    padding: '1px',
  },
  loading: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  additionnalTitle: {
    textAlign: 'center',
    color: '#DF4F4F',
  },
  links: {
    color: '#000000',
    textDecoration: 'none',
    '&:hover': {
      color: '#DF4F4F',
    },
  },
  ShoppingCart: {
    marginTop: theme.spacing(1),
  },
}))

const CardDetails = () => {
  const classes = useStyles()
  let [loading, setLoading] = useState(true)
  let [facebook, setFacebook] = useState('empty')
  let [youtube, setYoutube] = useState('empty')

  let { id } = useParams()

  let [fetchedData, updateFetchedData] = useState([])
  // let { _embedded } = fetchedData
  //   fetch
  let api = `
  https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_TICKETS_KEY}&id=${id}&locale=*&size=20&countryCode=BE&segmentId=KZFzniwnSyZfZ7v7nJ`
  useEffect(() => {
    ;(async function () {
      let results = await fetch(api)
      let data = await results.json()
      updateFetchedData(data._embedded.events)
      setLoading(false)
      // évite problème undefined
      setFacebook(
        data._embedded.events[0]._embedded.attractions[0].externalLinks
          .facebook[0].url
      )

      setYoutube(
        data._embedded.events[0]._embedded.attractions[0].externalLinks
          .youtube[0].url
      )
    })()
  }, [api])

  console.log(fetchedData)
  return (
    <div className={classes.container}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Container maxWidth="lg" className={classes.secondContainer}>
            <Grid container spacing={2}>
              {loading ? (
                <div className={classes.loading}>
                  <Spinner />
                </div>
              ) : (
                <>
                  <Grid item md={6} sm={6} xs={12}>
                    <div className={classes.containerImg}>
                      <img
                        src={fetchedData[0]?.images[4].url}
                        alt={fetchedData[0]?.name}
                        className={classes.img}
                      />
                    </div>
                  </Grid>

                  <Grid item md={6} sm={6} xs={12}>
                    <div className={classes.containerInfos}>
                      <h3 className={classes.name}>{fetchedData[0]?.name}</h3>
                      <div className={classes.infos}>
                        <p>
                          <span className={classes.badge}>Date</span>&nbsp;
                          <span className={classes.info}>
                            {fetchedData[0]?.dates.start.localDate}
                          </span>
                          &nbsp; à &nbsp;
                          <span className={classes.info}>
                            {fetchedData[0]?.dates.start.localTime}
                          </span>
                        </p>
                        <p>
                          <span className={classes.badge}>Price</span>&nbsp;
                          <span className={classes.info}>
                            {fetchedData[0]?.priceRanges[0].min}
                          </span>{' '}
                          à{' '}
                          <span className={classes.info}>
                            {fetchedData[0]?.priceRanges[0].max}€ / TVAC
                          </span>
                        </p>
                        <p>
                          <span className={classes.badge}>Venue</span>&nbsp;
                          <span className={classes.info}>
                            {fetchedData[0]?._embedded.venues[0].name}
                          </span>{' '}
                        </p>
                        <p>
                          <span className={classes.badge}>Address</span>&nbsp;
                          <span className={classes.info}>
                            {fetchedData[0]?._embedded.venues[0].address.line1},{' '}
                            {fetchedData[0]?._embedded.venues[0].city.name}{' '}
                            {fetchedData[0]?._embedded.venues[0].country.name}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <div className={classes.ShoppingCart}>
                    <ShoppingCart fetchedData={fetchedData} />
                  </div>
                  <Grid item xs={12}>
                    <div>
                      <h3 className={classes.additionnalTitle}>
                        Additional info
                      </h3>
                      <Grid container>
                        <Grid item xs={12}>
                          <Container
                            maxWidth="lg"
                            className={classes.secondContainer}
                          >
                            <Grid container spacing={2}>
                              <Grid item md={4} sm={6} xs={12}>
                                <p>
                                  <span className={classes.badge}>Genre</span>
                                  &nbsp;{' '}
                                  {
                                    fetchedData[0]?.classifications[0].genre
                                      .name
                                  }
                                </p>
                              </Grid>
                              <Grid item md={4} sm={6} xs={12}>
                                <p>
                                  <span className={classes.badge}>
                                    Facebook
                                  </span>
                                  &nbsp;
                                  {facebook !== 'empty' ? (
                                    <a
                                      href={facebook}
                                      className={classes.links}
                                    >
                                      Website
                                    </a>
                                  ) : (
                                    'empty'
                                  )}
                                </p>
                              </Grid>
                              <Grid item md={4} sm={6} xs={12}>
                                <p>
                                  <span className={classes.badge}>Youtube</span>
                                  &nbsp;
                                  {youtube !== 'empty' ? (
                                    <a href={youtube} className={classes.links}>
                                      Website
                                    </a>
                                  ) : (
                                    'empty'
                                  )}
                                </p>
                              </Grid>
                            </Grid>
                          </Container>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </>
              )}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default CardDetails
