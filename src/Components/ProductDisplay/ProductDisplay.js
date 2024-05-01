import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';


export const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} />
                <img src={product.image} />
                <img src={product.image} />
                <img src={product.image} />
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} />
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-start'>
                <img src={star_icon} />
                <img src={star_icon} />
                <img src={star_icon} />
                <img src={star_icon} />
                <img src={star_dull_icon} />
                <p>(21)</p>
            </div>
            <div className='productdisplay-rightt-prices'>
                <div className='productdisplay-rightt-price-old'>${product.old_price}</div>
                <div className='productdisplay-rightt-price-new'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
            A description summarizes a book's content to give readers a glimpse into what the book is about. Some authors place the description on the back of the book cover, but you'll find it mostly on retailer websites, such as Amazon or Barnes & Noble.
            </div>
            <button>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category : </span> Adult Book, Adventurer</p>
            <p className='productdisplay-right-category'><span>Tags : </span> newbooks, Adventurerbooks</p>
        </div>

    </div>
  )
}
