import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import guitar from '../assets/guitar.JPG'
import SideNav from '../components/SideNav'

const Music = () => {
  return (
    <>
      <Header />
      <SideNav />
      <div className="music">
        <div className="overlay"></div>

        <iframe
          src="https://open.spotify.com/embed/artist/3uz9jrGXFBjSkfOiFQA0H8"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          className="player"
        ></iframe>

        <div class="guitar-pic">
          <img src={guitar} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Music
