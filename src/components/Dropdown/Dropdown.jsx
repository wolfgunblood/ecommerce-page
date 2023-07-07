import React from 'react';
import "./Dropdown.scss";
import { Thumb1, Delete } from '../../assets/images';

const Dropdown = () => {
    return (
        <div className='dropdown-container'>
            <div className='dropdown-title-container'>
                <p className='dropdown-title'>Cart</p>
            </div>
            <div className='dropdown-content-container'>
                <img src={Thumb1} alt="Thumbnail" className='thumbnail-cart' />
                <div className='dropdown-content-details'>
                    <p className='dropdown-content'>Fall Limited Edition Sneakers </p>
                    <p className='cart-price'> $125.00 x 4  <span className='total'>$500.00</span></p>

                </div>
                <img src={Delete} alt="Remove" />
            </div>
            <button className='checkout-btn'>Checkout</button>
        </div>
    )
}

export default Dropdown