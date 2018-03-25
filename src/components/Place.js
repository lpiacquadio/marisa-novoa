import React, { Component } from 'react'

class Place extends Component {
  render() {
    return (
      <section id="place">
        <div className="container wow fadeInUp">
          <div className="section-header">
            <h3 className="section-title">Espacio</h3>
            <p className="section-description">En nuestro consultorio contamos con todo lo necesario para...</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service">
                <div className="pic" style={{ backgroundImage: `url(${'img/place-1.jpg'})` }}></div>
                <h4>Bla bla bla</h4>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="service">
                <div className="pic" style={{ backgroundImage: `url(${'img/place-2.jpg'})` }}></div>
                <h4>Bla bla bla</h4>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="service">
                <div className="pic" style={{ backgroundImage: `url(${'img/place-3.jpg'})` }}></div>
                <h4>Bla bla bla</h4>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="service">
                <div className="pic" style={{ backgroundImage: `url(${'img/place-4.jpg'})` }}></div>
                <h4>Bla bla bla</h4>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default Place
