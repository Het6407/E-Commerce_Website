import React from 'react'
import Header from '../header'

const index = () => {
  return (
    <div>
     <Header />
     <section class="hero-section">
      <div class="hero">
        <h2>Shop Savvy</h2>
        <p>
          Join us in the exciting world of programming and turn your ideas into
          reality. Unlock the world of endless possibilities - learn to code and
          shape the digital future with us.
        </p>
        <div class="buttons">
          <a href="#" class="join">Join Now</a>
          <a href="#" class="learn">Learn More</a>
        </div>
      </div>
      <div class="img">
        <img src="https://www.codingnepalweb.com/demos/create-responsive-website-html-css/hero-bg.png" alt="hero image" />
      </div>
    </section>


    </div>
  )
}

export default index
