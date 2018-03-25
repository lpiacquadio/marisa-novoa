import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="container">

          <div id="logo" className="pull-left">
            <a href="#hero"><img src="img/logo.png" alt="" title=""></img></a>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active"><a href="#hero">Inicio</a></li>
              <li><a href="#about">Nosotros</a></li>
              <li><a href="#specialties">Especializaciones</a></li>
              <li><a href="#place">Espacio</a></li>
              {/* <li className="menu-has-children"><a href="">Drop Down</a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="menu-has-children"><a href="#">Drop Down 2</a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                  <li><a href="#">Drop Down 5</a></li>
                </ul>
              </li> */}
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
