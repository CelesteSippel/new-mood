import React from 'react'
import Header from '../components/Header'
import pink from '../assets/pink.JPG'
import Footer from '../components/Footer'
import SideNav from '../components/SideNav'

const HomePage = () => {
  return (
    <>
      <Header />
      <SideNav />
      <div>
        <main>
          <div className="hero-pic">
            <img src={pink} />
          </div>
          <div className="video">
            <iframe
              width="1438"
              height="715"
              src="https://www.youtube.com/embed/2k1jHbOtp9k"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="you-tube"
            ></iframe>
          </div>
          <Footer />
        </main>
      </div>
    </>
  )
}

export default HomePage
