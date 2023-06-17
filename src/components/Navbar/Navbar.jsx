import React from 'react';
import "./Navbar.scss";
import Logo from "../../assets/images/logo.svg";
import Cart from "../../assets/images/icon-cart.svg"
import Avatar from "../../assets/images/image-avatar.png"
const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={Logo} className="navbar-brand" alt="Brand Logo" />
          <ul className='nav-list'>
            <li className='nav-item'><a href="#" className='nav-link'> Collections</a></li>
            <li className='nav-item'><a href="#" className='nav-link'>Men</a></li>
            <li className='nav-item'><a href="#" className='nav-link'>Women</a></li>
            <li className='nav-item'><a href="#" className='nav-link'>About</a></li>
            <li className='nav-item'><a href="#" className='nav-link'>Contact</a></li>
          </ul>
        </div>
        <div className='container-cart'>
          <button className='btn-cart'><img src={Cart} alt="Cart" /></button>
          <img src={Avatar} alt="Avatar" className='avatar' />
        </div>
      </nav>
  )
}

export default Navbar