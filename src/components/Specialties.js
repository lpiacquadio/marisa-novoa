import React, { Component } from 'react'

class Specialties extends Component {
  render() {
    return (
      <section id="specialties">
        <div className="container wow fadeIn">
          <div className="section-header">
            <h3 className="section-title">Especializaciones</h3>
            <p className="section-description">Contamos con las siguientes disciplinas</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="box">
                <div className="icon"><a href=""><i className="icon-eye"></i></a></div>
                <h4 className="title"><a href="">Estimulación Visual</a></h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="box">
                <div className="icon"><a href=""><i className="icon-tap-all"></i></a></div>
                <h4 className="title"><a href="">Terapia Ocupacional</a></h4>
                <p className="description">Integración sensorial, neurodesarrollo, terapia cognitiva conductual, estimulación temprana, entrenamiento en AVD, taller de escritura, taller de habilidades sociales</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="box">
                <div className="icon"><a href=""><i className="icon-head-question"></i></a></div>
                <h4 className="title"><a href="">Psicología</a></h4>
                <p className="description">TCC, taller de habilidades sociales</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="box">
                <div className="icon"><a href=""><i className="icon-read"></i></a></div>
                <h4 className="title"><a href="">Psicopedagogía</a></h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="box">
                <div className="icon"><a href=""><i className="icon-walking"></i></a></div>
                <h4 className="title"><a href="">Kinesiología</a></h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="box">
                <div className="icon"><a href=""><i className="icon-head-speech"></i></a></div>
                <h4 className="title"><a href="">Fonoudiología</a></h4>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default Specialties
