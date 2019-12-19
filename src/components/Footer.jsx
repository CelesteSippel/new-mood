import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h2 className="footer-text">
          Sign Up for Future Shows and Announcements
        </h2>
      </div>
      <div>
        <form className="email-list">
          <span>
            <label className="padding">Email</label>
          </span>
          <input type="email" placeholder="Email Address" />
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
