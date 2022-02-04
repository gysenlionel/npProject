import React, { useEffect, useState } from 'react'
import axios from 'axios'

const News = () => {
  let [fetchedData, updateFetchedData] = useState([])

  let [allData, setAllData] = useState([])
  let [allData2, setAllData2] = useState([])
  let [allData3, setAllData3] = useState([])

  let { page } = fetchedData

  let api = `
  https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_TICKETS_KEY}&locale=*&countryCode=BE&segmentId=KZFzniwnSyZfZ7v7nJ`
  useEffect(() => {
    ;(async function () {
      let results = await fetch(api)
      let data = await results.json()
      updateFetchedData(data)
    })()
  }, [api])

  // pour allData
  async function getPage(page) {
    let response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_TICKETS_KEY}&locale=*&page=${page}&countryCode=BE&segmentId=KZFzniwnSyZfZ7v7nJ`
    )
    let data = await response.json()
    return data._embedded.events
  }

  async function getPages(startPage, endPage) {
    let currentPage = startPage
    let finalArr = []
    while (currentPage <= endPage) {
      const pageData = await getPage(currentPage)
      // console.log('adding page', currentPage)
      finalArr.push(pageData)
      currentPage++
      // console.log(...pageData)
    }
    // tous mes tableaux set dans le state
    setAllData(finalArr)
  }

  // de 11 à 20
  async function getPages2(startPage, endPage) {
    let currentPage = startPage
    let finalArr = []
    while (currentPage <= endPage) {
      const pageData = await getPage(currentPage)
      // console.log('adding page', currentPage)
      finalArr.push(pageData)
      currentPage++
      // console.log(...pageData)
    }
    // tous mes tableaux set dans le state
    setAllData2(finalArr)
  }

  // de 21 à 25
  // async function getPages3(startPage, endPage) {
  //   let currentPage = startPage
  //   let finalArr = []
  //   while (currentPage <= endPage) {
  //     const pageData = await getPage(currentPage)
  //     // console.log('adding page', currentPage)
  //     finalArr.push(pageData)
  //     currentPage++
  //     // console.log(...pageData)
  //   }
  //   // tous mes tableaux set dans le state
  //   setAllData3(finalArr)
  // }

  useEffect(() => {
    getPages(0, 10)
  }, [])

  useEffect(() => {
    getPages2(11, 18)
  }, [])

  // useEffect(() => {
  //   getPages3(21, 25)
  // }, [])
  console.log(allData)
  console.log(allData2)

  // fonction concat mes tableau en un
  const concatArray = allData.reduce((acc, val) => acc.concat(val), [])

  // console.log(concatArray)

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
