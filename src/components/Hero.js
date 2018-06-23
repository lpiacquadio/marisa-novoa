import React, { Component } from 'react'

class Hero extends Component {
  render() {
    return (
      <section id="hero">
        <div className="hero-container">
          <h1>Consultorio FeedBack</h1>
          <h2>Estimulación visual, terapia ocupacional y estimulación temprana</h2>
          <a href="#about" className="btn-get-started">Comenzar</a>
        </div>
      </section>
    )
  }
}

export default Hero
