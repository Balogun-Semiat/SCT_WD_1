import React from 'react';
import './App.css'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection';
import Solutions from './Components/Solutions';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Process from './Components/Process';

function App() {

  return (
    <>
      <Navbar />
      <Herosection />
      <About />
      <Solutions />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}

export default App
