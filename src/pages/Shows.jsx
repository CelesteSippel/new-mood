import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Shows = () => {
  return (
    <>
      <Header />
      <div>
        <h2 className="upcoming-shows">Upcoming Shows</h2>
        <section className="events">
          <section className="event-info"></section>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Shows
