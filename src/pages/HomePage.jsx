import React from 'react'
import Header from '../components/Header'
import brewery from '../assets/brewery.JPG'

const HomePage = () => {
  return (
    <>
      <Header />
      <div>
        <main>
          <div className="hero-pic">
            <img src={brewery} />
          </div>
          <div></div>
        </main>
      </div>
    </>
  )
}

export default HomePage
