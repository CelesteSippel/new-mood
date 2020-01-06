import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'

const Shows = () => {
  const [shows, setShows] = useState([])

  const getShowData = async () => {
    const resp = await axios.get('https://localhost:5001/api/New-Mood')
    setShows(resp.data)
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
                  <li>Key: {show.Id}</li>
                  <li>Event: {show.Event}</li>
                  <li>Location: {show.Location}</li>
                  <li>Date: {show.Date}</li>
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
