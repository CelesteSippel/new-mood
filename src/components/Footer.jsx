import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const Footer = () => {
  const [email, setEmail] = useState('')
  const submitData = async event => {
    event.preventDefault()

    const resp = await axios.post(
      'https://new-mood-api.herokuapp.com/api/EmailList',
      {
        email: email,
      }
    )
    console.log(resp.data)
    setEmail('')
  }

  return (
    <div className="footer">
      <div>
        <h2 className="footer-text">
          Sign Up for Future Shows and Announcements
        </h2>
      </div>
      <div>
        <form
          onSubmit={e => {
            submitData(e)
            alert('Email Added')
          }}
          className="email-list"
        >
          <span>
            <label htmlFor="email" className="padding">
              Email
            </label>
          </span>
          <input
            onChange={e => {
              setEmail(e.target.value)
            }}
            type="email"
            value={email}
            placeholder="Email Address"
          />
          <span>
            <input type="submit" value="Submit" className="button" />
          </span>
        </form>
      </div>
      <ul className="social-media">
        <li>
          <a target="_blank" href="https://www.instagram.com/newmoodband/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/thenewmood/">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://open.spotify.com/artist/3uz9jrGXFBjSkfOiFQA0H8?si=gGg4WfviS1GWXxX2gMnYAw"
          >
            <i className="fab fa-spotify"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UC6FuAGJqCidJf-PRrHY93rg"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
