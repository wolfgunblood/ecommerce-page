import React,{useState} from 'react';
import "./App.scss"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Modal from './components/Modal/Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // }

  // console.log(isOpen);
  return (
    <div className="app-container">
      <Navbar />
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  )
}

export default App