import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container wow fadeInUp">
          <div className="section-header">
            <h3 className="section-title">Contacto</h3>
            <p className="section-description">Nuestro consultorio se ubica en el barrio de Villa Soldati, cerca de la estacion de tren...</p>
          </div>
        </div>

        <div id="google-map" data-latitude="-34.6574657" data-longitude="-58.4337781"></div>

        <div className="container wow fadeInUp">
          <div className="row justify-content-center">

            <div className="col-lg-3 col-md-4">

              <div className="info">
                <div>
                  <i className="icon-map-marker"></i>
                  <p>Corrales 2462<br/>Capital Federal, Buenos Aires</p>
                </div>

                <div>
                  <i className="icon-envelope-open"></i>
                  <p>info@marisanovoa.com</p>
                </div>

                <div>
                  <i className="icon-telephone"></i>
                  <p>+54 15 6025 6068</p>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="twitter"><i className="icon-twitter"></i></a>
                <a href="#" className="facebook"><i className="icon-facebook"></i></a>
                <a href="#" className="instagram"><i className="icon-instagram"></i></a>
                <a href="#" className="linkedin"><i className="icon-linkedin2"></i></a>
              </div>

            </div>

            <div className="col-lg-5 col-md-8">
              <div className="form">
                <div id="sendmessage">Su mensaje a sido enviado. Gracias!</div>
                <div id="errormessage"></div>
                <form action="" method="post" role="form" className="contactForm">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Tu nombre" data-rule="required" data-msg="Escriba su nombre" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Tu Email" data-rule="email" data-msg="Escriba un email válido" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Titulo" data-rule="required" data-msg="Escriba un titulo" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Escriba el mensaje" placeholder="Mensaje"></textarea>
                    <div className="validation"></div>
                  </div>
                  <div className="text-center"><button type="submit">Enviar Mensaje</button></div>
                </form>
              </div>
            </div>

          </div>

        </div>
      </section>
    )
  }
}

export default Contact
