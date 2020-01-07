import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'

const Shows = () => {
  const [shows, setShows] = useState([])

  const getShowData = async () => {
    // const resp = await axios.get('https://localhost:5001/api/New-Mood')
    // setShows(resp.data)

    const sample = []
    for (let i = 0; i < 20; i++) {
      sample.push({
        id: i,
        event: 'Downtown Judy Brown',
        location: 'Left at the light',
        date: '1/3/2020',
      })
    }
    setShows(sample)
  }

  useEffect(() => {
    getShowData()
  }, [])

  return (
    <>
      <Header />
      <div>
        <h2 className="upcoming-shows">Upcoming Shows</h2>
        <section className="events-box">
          <section className="event-info">
            {shows.map(show => {
              return (
                <ul>
                  <li>Key: {show.id}</li>
                  <li>Event: {show.event}</li>
                  <li>Location: {show.location}</li>
                  <li>Date: {show.date}</li>
                </ul>
              )
            })}
          </section>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Shows
