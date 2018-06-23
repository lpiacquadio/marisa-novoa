import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row about-container">

            <div className="col-lg-6 content order-lg-1 order-2">
              <h2 className="title">Unas palabras sobre nosotros</h2>
              <p>
                Directora del lugar: Licenciada Marisa Cristina Novoa
              </p>

              <div className="icon-box wow fadeInUp">
                <div className="icon"></div>
                <h4 className="title">Licenciada en Terapia Ocupacional (UBA)</h4>
                <p className="description">Especializada en intervenciones de patologias de la niñez con abordajes desde:</p>
                <ul>
                  <li>Integración sensorial</li>
                  <li>Neurodesarrollo</li>
                  <li>Terapia cognitivo conductual (TCC)</li>
                </ul>
              </div>

              <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon"></div>
                <h4 className="title">Estimuladora temprana (ACES)</h4>
              </div>

              <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon"></div>
                <h4 className="title">Estimuladora temprana posturo visual (CAECE)</h4>
              </div>

            </div>

            <div className="col-lg-6 background order-lg-2 order-1 wow fadeInRight"></div>
          </div>

        </div>
      </section>
    )
  }
}

export default About
