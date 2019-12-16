import React from 'react'
import Header from '../components/Header'
import brewery from '../assets/brewery.JPG'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <Header />
      <div>
        <main>
          <div className="hero-pic">
            <img src={brewery} />
          </div>
          <div className="video">
            <iframe
              width="1417"
              height="715"
              src="https://www.youtube.com/embed/2k1jHbOtp9k"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <Footer />
        </main>
      </div>
    </>
  )
}

export default HomePage
