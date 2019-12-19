import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import guitar from '../assets/guitar.JPG'

const Music = () => {
  return (
    <>
      <Header />
      <div>
        <img src={guitar} />
      </div>
      <div>
        <iframe
          src="https://open.spotify.com/embed/artist/3uz9jrGXFBjSkfOiFQA0H8"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
      <Footer />
    </>
  )
}

export default Music
