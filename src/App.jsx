import React from 'react'
import { AboutUs, Design, Footer, Header, Navbar, Services, Team } from './components/export'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Services />
      <AboutUs />
      <Team />
      <Design />
      <Footer /> 
    </div>
  )
}

export default App