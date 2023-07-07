import React, { useState } from 'react';
import "./Hero.scss";
import { Product1,Product2,Product3,Product4, Thumb1, Thumb2, Thumb3, Thumb4, Plus, Minus, Cart } from '../../assets/images'
import { CartIcon } from '../Icons/Icon';

const Hero = ({ isOpen, setIsOpen,quantity,setQuantity }) => {

const [mainImg, setMainImg] = useState(Product1);


const handleMain = (e) => {
  const id = e.target.id;
  
  // console.log(id)

  if(id === 'one'){
    setMainImg(Product1)
  }else if (id === 'two'){
    setMainImg(Product2)
  }else if (id === 'three'){
    setMainImg(Product3)
  }else if (id === 'four'){
    setMainImg(Product4)
  }
}
const addItem = () => {
  setQuantity(quantity + 1)

}

const removeItem = () => {
  if(quantity === 0){
    return ;
  }
  if(quantity > 0){
    setQuantity(quantity - 1)
  }

}
  


  return (
    <div className='hero-container'>
      <div className='product-image-container'>
        <button className='main-image' onClick={() => setIsOpen(true)}>
          <img src={mainImg} alt="Product" />
        </button>
        <ul className='image-list'>
          <li className='image-list-item'  onClick={handleMain}><img src={Thumb1} id='one' alt="Thumbnail" /></li>
          <li className='image-list-item'  onClick={handleMain}><img src={Thumb2} id='two' alt="Thumbnail" /></li>
          <li className='image-list-item'  onClick={handleMain}><img src={Thumb3} id='three' alt="Thumbnail" /></li>
          <li className='image-list-item'  onClick={handleMain}><img src={Thumb4} id='four' alt="Thumbnail" /></li>
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
            <button className='counter-button' onClick={removeItem}><img src={Minus} alt="Minus" /></button>
            <p className='counter-number'>{quantity}</p>
            <button className='counter-button' onClick={addItem}><img src={Plus} alt="Plus" /></button>
          </div>
          <button className='add-to-cart-button'>
            {/* <img src={Cart} alt="Cart" /> */}
            <CartIcon class="fill-white" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero