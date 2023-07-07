import React from 'react';
import "./Dropdown.scss";
import { Thumb1, Delete } from '../../assets/images';

const Dropdown = ({quantity}) => {
    return (
        <div className='dropdown-container'>
            <div className='dropdown-title-container'>
                <p className='dropdown-title'>Cart</p>
            </div>
            <div className='dropdown-content-container'>
                <img src={Thumb1} alt="Thumbnail" className='thumbnail-cart' />
                <div className='dropdown-content-details'>
                    <p className='dropdown-content'>Fall Limited Edition Sneakers </p>
                    <p className='cart-price'> $125.00 x {quantity}  <span className='total'>${125*quantity}</span></p>

                </div>
                <img src={Delete} alt="Remove" className='remove-icon' />
            </div>
            <button className='checkout-btn'>Checkout</button>
        </div>
    )
}

export default Dropdown