import React, { Component } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Specialties from './components/Specialties'
import CallToAction from './components/CallToAction'
import Place from './components/Place'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Hero />
        <main id="main">
          <About />
          <Specialties />
          <CallToAction />
          <Place />
          <Contact />
        </main>
        <Footer />
        <a href="#" className="back-to-top"><i className="icon-chevron-up"></i></a>
      </div>
    );
  }
}

export default App
