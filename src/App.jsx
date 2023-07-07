import React,{useState} from 'react';
import "./App.scss"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Modal from './components/Modal/Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // }

  // console.log(isOpen);
  return (
    <div className="app-container">
      <Navbar quantity={quantity} setQuantity={setQuantity} />
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} quantity={quantity} setQuantity={setQuantity} />
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  )
}

export default App