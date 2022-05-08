import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, price, suplayer, discription, quantity } = product;
    return (
        <div className='container head mt-5'>
            <img src={img} alt="" width="300" height="400" />
            <h2>Name: {name}</h2>
            <h5>Price: ${price}</h5>
            <h4>Quantity: {quantity}</h4>
            <h4>Suplayer: {suplayer}</h4>
            <p>Discription: {discription}</p>

            <button className='bg-primary'>Buy : {name}</button>
        </div>
    );
};

export default Product;