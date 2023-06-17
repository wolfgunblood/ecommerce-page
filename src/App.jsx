import React from 'react';
import "./App.scss"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Modal from './components/Modal/Modal';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Modal />
    </div>
  )
}

export default App