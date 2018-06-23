import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container wow fadeInUp">
          <div className="section-header">
            <h3 className="section-title">Contacto</h3>
            <p className="section-description">Nuestro consultorio se ubica en el barrio de Villa Soldati, cerca de la estación Soldati de la linea de tren Belgrano Sur <br/> Lineas de colectivo que nos acercan: 6 - 150 - 101 - 143 - 76 - 91 - 115 - 46</p>
          </div>
        </div>

        <div id="google-map" data-latitude="-34.6574657" data-longitude="-58.4337781"></div>

        <div className="container wow fadeInUp">
          <div className="row">

            <div className="col-lg-4">
              <div className="info">
                <div>
                  <i className="icon-map-marker"></i>
                  <p>Corrales 2462<br/>Capital Federal, Buenos Aires</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="info">
                <div>
                  <i className="icon-envelope-open"></i>
                  <p>alitonovoa@hotmail.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="info">
                <div>
                  <i className="icon-telephone"></i>
                  <p>+54 15 6025 6068</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    )
  }
}

export default Contact
