import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <ul className="nav-links">
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
        <li><Link to="/current_project">Current Project</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  )
}

export default Header