import React, { useEffect, useState } from 'react'

import { Container, Grid, makeStyles } from '@material-ui/core'

import SearchBar from '../../components/SearchBar/SearchBar'
import CardComp from '../../components/CardComp/CardComp'
import PaginationControlled from '../../components/Pagination/PaginationComp'
import Spinner from '../../components/Spinner/Spinner'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(9),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(13),
    },
  },
  search: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  paginate: {
    display: 'flex',
    justifyContent: 'center',
  },
  loading: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}))
const Events = () => {
  const classes = useStyles()

  let [loading, setLoading] = useState(true)
  // data
  let [pageNumber, setPageNumber] = useState(0)
  let [fetchedData, updateFetchedData] = useState([])
  let [search, setSearch] = useState('')
  // destructuration data
  let { page, _embedded, _links } = fetchedData

  //   fetch
  let api = `
  https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_TICKETS_KEY}&keyword=${search}&locale=*&page=${pageNumber}&size=20&countryCode=BE&segmentId=KZFzniwnSyZfZ7v7nJ`
  useEffect(() => {
    ;(async function () {
      let results = await fetch(api)
      let data = await results.json()
      updateFetchedData(data)
      setLoading(false)
    })()
  }, [api])

  console.log(page)
  return (
    <div className={classes.container}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Container maxWidth="lg" className={classes.secondContainer}>
            <Grid container spacing={2}>
              <div className={classes.search}>
                <SearchBar
                  setPageNumber={setPageNumber}
                  setSearch={setSearch}
                />
              </div>
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
                    <Grid item lg={3} md={4} xs={6} key={index}>
                      <CardComp
                        name={e.name}
                        img={e.images[8].url}
                        date={e.dates.start.localDate}
                        priceMin={e.priceRanges[0].min}
                        venue={e._embedded.venues[0].name}
                      />
                    </Grid>
                  ))
                )}
                <Grid item xs={12} className={classes.paginate}>
                  <PaginationControlled
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    pages={page}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default Events
