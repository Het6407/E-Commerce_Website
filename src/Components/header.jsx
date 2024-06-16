import React from 'react'
import './head.css'
import { Link } from 'react-router-dom'
const header = () => {
  return (
    <div>
      <header class="header">
      <nav class="navbar">
        <h2 class="logo"><a href="#">E-Commerce</a></h2>
        <input type="checkbox" id="menu-toggle" />
        <label for="menu-toggle" id="hamburger-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </label>
        <ul class="links">
          <li><Link to ="../index">Home</Link></li>
          <li><Link to ="../About">About Us</Link></li>
          <li><Link to ="../Contact">Contact Us</Link></li>
        </ul>
        <div class="buttons">
          <Link to ="../Loginsignup" class="signin">Sign In</Link>
          <Link to ="../SignUp" class="signup">Sign Up</Link>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default header
