import React,{useState} from 'react';
import "./Modal.scss"
import { Product1, Product2, Product3, Product4, Thumb1, Thumb2, Thumb3, Thumb4, Close, Next, Previous } from '../../assets/images';

const Modal = () => {

    const thumbnails = [Thumb1, Thumb2, Thumb3, Thumb4];
    const prouducts = [Product1, Product2, Product3, Product4];
    const [current, setCurrent] = useState(Product1)
    const [index, setIndex] = useState(0)

    const plusOne = () => {
        if(index < 3){
            setIndex(index + 1)
            setCurrent(prouducts[index + 1])
        }
        console.log(index)
    }

    const minusOne = () => {
        if(index > 0){
            setIndex(index - 1)
            setCurrent(prouducts[index - 1])
        }
        console.log(index)
    }
    
    
    return (
        <div className='modal-container'>

            <div className='main-product'>
                <img src={Close} alt="Close" className='close' />
                <button className='next-container' onClick={plusOne} >
                    <img src={Next} alt="Next" className='next' />
                </button>
                <button className='previous-container' onClick={minusOne}>
                    <img src={Previous} alt="Previous" className='previous'  />
                </button>
                <img src={current} alt="main" className='main' />
                <div className='thumbnail-container'>
                    {thumbnails.map((thumbnail, index) => (
                        <img 
                            src={thumbnail} 
                            alt='Thumbnail' 
                            key={index} 
                            className='thumbnail' 
                            onClick={() => {
                                setCurrent(prouducts[index]),
                                    setIndex(index);
                            }} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Modal