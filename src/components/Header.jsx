import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navigation">
        <header>
          <Link to="/" className="name">
            New Mood
          </Link>
        </header>
        <ul className="sub-nav">
          <li>
            <Link to="/Music" className="nav-details">
              Music
            </Link>
          </li>
          <li>
            <Link to="/Shows" className="nav-details">
              Shows
            </Link>
          </li>
          <li>
            <Link to="/PressKit" className="nav-details">
              Press Kit
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-details">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
