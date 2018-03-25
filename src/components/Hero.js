import React, { Component } from 'react'

class Hero extends Component {
  render() {
    return (
      <section id="hero">
        <div className="hero-container">
          <h1>Bienvenidos a Marisa Novoa</h1>
          <h2>El mejor consultorio de la Ciudad de Buenos Aires</h2>
          <a href="#about" className="btn-get-started">Comenzar</a>
        </div>
      </section>
    )
  }
}

export default Hero
