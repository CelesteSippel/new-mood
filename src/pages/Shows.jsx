import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import SideNav from '../components/SideNav'
import Moment from 'react-moment'

const Shows = () => {
  const [shows, setShows] = useState([])

  const getShowData = async () => {
    const resp = await axios.get('https://localhost:5001/api/Show')
    console.log(resp.data)
    setShows(resp.data)
  }

  useEffect(() => {
    getShowData()
  }, [])

  return (
    <>
      <Header />
      <SideNav />
      <div>
        <h2 className="upcoming-shows">Upcoming Shows</h2>
        <section>
          <section className="event-info ">
            {shows.map(show => {
              return (
                <ul className="events-box">
                  <li className="event-detail">
                    <Moment format="MMM Do, YYYY">{show.dateOfEvent}</Moment>
                  </li>
                  <li className="event-detail">{show.eventName}</li>
                  <li className="event-detail">{show.location}</li>
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
