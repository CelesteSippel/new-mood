import React, { useState } from 'react'
import axios from 'axios'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [resetForm, setResetForm] = useState(false)

  const submitData = async event => {
    event.preventDefault()

    const resp = await axios.post('https://localhost:5001/api/EmailList', {
      email: email,
    })
    console.log(resp.data)
    setResetForm(true)
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
          <a href="https://www.instagram.com/newmoodband/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/thenewmood/">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <i className="fab fa-spotify"></i>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC6FuAGJqCidJf-PRrHY93rg">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
