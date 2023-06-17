import React from 'react';
import "./Hero.scss";
import { Product1, Thumb1, Thumb2, Thumb3, Thumb4, Plus, Minus, Cart } from '../../assets/images'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='product-image-container'>
        <div className='main-image'>
          <img src={Product1} alt="Product" />
        </div>
        <ul className='image-list'>
          <li className='image-list-item'><img src={Thumb1} alt="Thumbnail" /></li>
          <li className='image-list-item'><img src={Thumb2} alt="Thumbnail" /></li>
          <li className='image-list-item'><img src={Thumb3} alt="Thumbnail" /></li>
          <li className='image-list-item'><img src={Thumb4} alt="Thumbnail" /></li>
        </ul>
      </div>
      <div className='product-details-container'>
        <div className='product-details-container-top'>
          <h5 className='product-brand'>Sneaker Company</h5>
          <h2 className='product-name'>Fall Limited Edition Sneakers</h2>
          <p className='product-description'>These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <h3 className='product-price-sale'>$125.00<span>50%</span></h3>
          <h3 className='product-price'>$250.00</h3>
        </div>
        <div className='product-details-container-bottom'>
          <div className='counter'>
            <button className='counter-button'><img src={Minus} alt="Minus" /></button>
            <p className='counter-number'>0</p>
            <button className='counter-button'><img src={Plus} alt="Plus" /></button>
          </div>
          <button className='add-to-cart-button'>
            <img src={Cart} alt="Cart" />
            Add to cart
            </button>
        </div>
      </div>
    </div>
  )
}

export default Hero