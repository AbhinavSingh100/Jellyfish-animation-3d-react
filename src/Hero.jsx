import React from 'react'
import './Hero.css'
import ThreeDComp from './ThreeDComp'
import Page from './Page'

const Hero = () => {
  return (
    <div className="hero-wrapper">
      {/* Layer 1: Canvas for objects BEHIND the HTML */}
      <div className="canvas-back">
        <ThreeDComp inFront={false} />
      </div>

      {/* Layer 2: Your HTML Content */}
      <div className="portfolio">
        <Page />
      </div>

      {/* Layer 3: Canvas for objects IN FRONT of the HTML */}
      <div className="canvas-front">
        <ThreeDComp inFront={true} />
      </div>
    </div>
  )
}

export default Hero
