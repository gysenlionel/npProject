import React, { useEffect, useState } from 'react'

const News = () => {
  let [fetchedData, updateFetchedData] = useState([])
  let [pageNumber, setPageNumber] = useState(0)

  let [allData, setAllData] = useState([])

  let { page, _embedded, _links } = fetchedData

  let api = `
  https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_TICKETS_KEY}&locale=*&page=${pageNumber}&countryCode=BE&segmentId=KZFzniwnSyZfZ7v7nJ`
  useEffect(() => {
    ;(async function () {
      let results = await fetch(api)
      let data = await results.json()
      updateFetchedData(data)
    })()
  }, [api])

  useEffect(() => {}, [])

  console.log(fetchedData)

  return (
    <>
      <div>new news news news news news News</div>
      <div>new news news news news news News</div>
      <div>new news news news news news News</div>
      <div>new news news news news news News</div>
      <div>new news news news news news News</div>
      <div>new news news news news news News</div>
      <div>new news news news news news News</div>
      <div>new news news news news news News</div>
    </>
  )
}

export default News
