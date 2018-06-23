import React, { Component } from 'react'

class Specialties extends Component {
  render() {
    return (
      <section id="specialties">
        <div className="container wow fadeIn">
          <div className="section-header">
            <h3 className="section-title">Servicios</h3>
            <p className="section-description">Brindamos los siguientes servicios</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="box">
                <div className="icon"><a href=""><i className="icon-eye"></i></a></div>
                <h4 className="title"><a href="">Estimulación Visual</a></h4>
                <p className="description">Es una especialidad terapéutica destinada a ayudar al niño a desarrollar
                todas sus capacidades físicas y emocionales, teniendo en cuenta la premisa que cuanto más se usa la
                <strong> visión</strong>, mayor es la probabilidad de un mayor <strong>funcionamiento visual </strong>
                y esa <strong>capacidad visual</strong> le permitirá al niño conquistar progresivamente su entorno.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="box">
                <div className="icon"><a href=""><i className="icon-tap-all"></i></a></div>
                <h4 className="title"><a href="">Terapia Ocupacional</a></h4>
                <h5>Atención a adultos y jovenes</h5>
                <p className="description">Técnicas terapéuticas aplicadas a traves de actividades para prevenir, mantener
                y favorecer la restauración de las funciónes motoras y cognitivas.</p>
                <h5>Atención pediátrica</h5>
                <p className="description">A traves de las actividades y el juego alcanzamos un nivel óptimo del funcionamiento
                del niño en el hogar, la escuela y la comunidad. Los abordajes utilizados:</p>
                <ul>
                  <li>Integración sensorial</li>
                  <li>Terapia cognitivo conductual (TCC)</li>
                  <li>Neurodesarrollo</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="box">
                <div className="icon"><a href=""><i className="icon-head-question"></i></a></div>
                <h4 className="title"><a href="">Estimulación temprana</a></h4>
                <p className="description">Se basa en los conocimientos de la neurociencia sobre cómo se desarrolla el
                cerebro, cómo funciona y cómo su grado de maduración afecta el aprendizaje y el comportamiento del niño.
                El cerebro no madura por sí solo, sino que necesita de la estimulación del entorno para crecer, desarrollarse
                y funcionar adecuadamente.</p>
                <p className="description">Esto se pretende lograr ofrenciendo al niño gran variedad de estímulos de calidad
                relacionados con el desarrollo motor, la comunicación, la conducta y el juego.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default Specialties
