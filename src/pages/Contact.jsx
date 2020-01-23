import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import purple from '../assets/purple.JPG'
import SideNav from '../components/SideNav'

const Contact = () => {
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventDetails, setEventDetails] = useState('')

  const submitData = async e => {
    e.preventDefault()
    const resp = await axios.post(
      'https://new-mood-api.herokuapp.com/api/Booking',
      {
        contactName: contactName,
        email: email,
        eventDate: eventDate,
        eventLocation: eventLocation,
        eventDetails: eventDetails,
      }
    )
    console.log(resp.data)
    setContactName('')
    setEmail('')
    setEventDate('')
    setEventLocation('')
    setEventDetails('')
  }
  return (
    <>
      <Header />
      <SideNav />
      <div className="form-overlay">
        <section>
          <h2 className="booking-title">Contact New Mood for Bookings</h2>
          <form onSubmit={submitData}>
            <section className="booking-form">
              <section className="labels">
                <label htmlFor="name" className="name-input">
                  Name
                </label>
                <input
                  placeholder="Name"
                  className="form-input"
                  onChange={e => {
                    setContactName(e.target.value)
                  }}
                  value={contactName}
                  type="text"
                />
              </section>

              <section className="labels">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email"
                  className="form-input"
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                  value={email}
                  type="text"
                />
              </section>

              <section className="labels">
                <label htmlFor="eventDate">Event Date</label>
                <input
                  className="dateBox"
                  onChange={e => {
                    setEventDate(e.target.value)
                  }}
                  value={eventDate}
                  type="date"
                />
              </section>

              <section className="labels">
                <label htmlFor="eventLocation">Event Location</label>
                <input
                  placeholder="Location"
                  className="form-input"
                  onChange={e => {
                    setEventLocation(e.target.value)
                  }}
                  value={eventLocation}
                  type="text"
                />
              </section>

              <section className="labels">
                <label htmlFor="eventDetails">Event Details</label>
                <textarea
                  placeholder="Booking Details..."
                  className="form-event-details-input"
                  onChange={e => {
                    setEventDetails(e.target.value)
                  }}
                  value={eventDetails}
                ></textarea>
              </section>
              <span>
                <input type="submit" value="Submit" className="form-button" />
              </span>
            </section>
          </form>
        </section>
      </div>
      <div className="gig-pic">
        <img src={purple} />
      </div>
      <Footer />
    </>
  )
}

export default Contact
